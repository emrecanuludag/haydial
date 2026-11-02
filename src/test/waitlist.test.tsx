import { fireEvent, render, screen } from "@testing-library/react";
import type { ComponentType } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Waitlist } from "@/components/waitlist";
import { joinWaitlist } from "@/lib/waitlist";
import { forwardToWaitlist } from "@/lib/waitlist-store";
import { Route } from "@/routes/aydinlatma";

vi.mock("@/lib/waitlist", () => ({ joinWaitlist: vi.fn() }));

const join = vi.mocked(joinWaitlist);
const THANKS = /Teşekkürler/;

function submit(email: string) {
  fireEvent.change(screen.getByLabelText("E-posta adresi"), { target: { value: email } });
  fireEvent.submit(screen.getByRole("button").closest("form")!);
}

describe("Waitlist formu", () => {
  beforeEach(() => {
    join.mockReset();
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("kayıt başarılıysa teşekkür gösterir", async () => {
    join.mockResolvedValue({ saved: true });
    render(<Waitlist />);
    submit("ayse@example.com");
    expect(await screen.findByText(THANKS)).toBeInTheDocument();
    expect(join).toHaveBeenCalledWith({ data: { email: "ayse@example.com" } });
  });

  it("kayıt yapılamadıysa teşekkür göstermez", async () => {
    join.mockResolvedValue({ saved: false });
    render(<Waitlist />);
    submit("ayse@example.com");
    expect(await screen.findByRole("alert")).toHaveTextContent("listeye eklenmedi");
    expect(screen.queryByText(THANKS)).not.toBeInTheDocument();
  });

  it("sunucu hatasında teşekkür göstermez", async () => {
    join.mockRejectedValue(new Error("ağ hatası"));
    render(<Waitlist />);
    submit("ayse@example.com");
    expect(await screen.findByRole("alert")).toHaveTextContent("listeye eklenmedi");
    expect(screen.queryByText(THANKS)).not.toBeInTheDocument();
  });

  it("geçersiz e-postayı sunucuya göndermez", async () => {
    render(<Waitlist />);
    submit("gecersiz");
    expect(await screen.findByRole("alert")).toHaveTextContent("geçerli bir e-posta");
    expect(join).not.toHaveBeenCalled();
  });
});

describe("Aydınlatma", () => {
  it("form, göndermeden önce aydınlatma metnini gösterir", () => {
    render(<Waitlist />);
    const baglanti = screen.getByRole("link", { name: "KVKK Aydınlatma Metni" });
    expect(baglanti.getAttribute("href")).toBe("/aydinlatma");
  });

  it("sayfa veri sorumlusunu ve çalışan başvuru adresini yazar", () => {
    const Sayfa = Route.options.component as ComponentType;
    const { container } = render(<Sayfa />);
    const metin = container.textContent ?? "";
    expect(metin).toContain("Hasan Uludağ — Şahıs Şirketi");
    expect(metin).toContain("info@psikiyatri.pro");
    // haydial.ai'nin MX kaydı yok, bu adrese posta ulaşmaz.
    expect(metin).not.toContain("haydial.ai adresine");
    expect(metin).not.toContain("merhaba@");
  });
});

describe("forwardToWaitlist", () => {
  beforeEach(() => {
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("hedef tanımlı değilse başarısız sayılır ve istek atmaz", async () => {
    const fetchImpl = vi.fn();
    await expect(forwardToWaitlist("a@b.co", {}, fetchImpl)).resolves.toBe(false);
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("2xx dışındaki yanıtı başarısız sayar", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(new Response("", { status: 500 }));
    await expect(
      forwardToWaitlist("a@b.co", { url: "https://hook.test" }, fetchImpl),
    ).resolves.toBe(false);
  });

  it("ağ hatasını başarısız sayar", async () => {
    const fetchImpl = vi.fn().mockRejectedValue(new Error("ulaşılamadı"));
    await expect(
      forwardToWaitlist("a@b.co", { url: "https://hook.test" }, fetchImpl),
    ).resolves.toBe(false);
  });

  it("e-postayı ve gizli anahtarı hedefe iletir", async () => {
    const fetchImpl = vi.fn().mockResolvedValue(new Response("", { status: 200 }));
    await expect(
      forwardToWaitlist("a@b.co", { url: "https://hook.test", secret: "s3" }, fetchImpl),
    ).resolves.toBe(true);
    const [url, init] = fetchImpl.mock.calls[0]!;
    expect(url).toBe("https://hook.test");
    expect(init.headers.authorization).toBe("Bearer s3");
    expect(JSON.parse(init.body)).toMatchObject({ email: "a@b.co", source: "haydial-site" });
  });
});
