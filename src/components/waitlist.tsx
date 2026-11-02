import { useState, type FormEvent } from "react";

import { joinWaitlist } from "@/lib/waitlist";
import { emailSchema } from "@/lib/waitlist-store";

const SAVE_FAILED = "Kaydın alınamadı, e-postan listeye eklenmedi. Birazdan tekrar dene.";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) return setError("Lütfen geçerli bir e-posta adresi gir.");
    setError("");
    setSending(true);
    try {
      const { saved } = await joinWaitlist({ data: { email: parsed.data } });
      if (saved) return setDone(true);
      setError(SAVE_FAILED);
    } catch (err) {
      console.error(err);
      setError(SAVE_FAILED);
    } finally {
      setSending(false);
    }
  };

  if (done)
    return (
      <p className="rounded-xl bg-brand-soft px-5 py-4 text-sm font-medium">
        Teşekkürler! Erken erişim açıldığında ilk sen haberdar olacaksın.
      </p>
    );
  return (
    <form onSubmit={submit} className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          required
          maxLength={255}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eposta@adresin.com"
          aria-label="E-posta adresi"
          className="min-w-0 flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-brand"
        />
        <button
          type="submit"
          disabled={sending}
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {sending ? "Kaydediliyor…" : "Listeye katıl"}
        </button>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-xs text-destructive">
          {error}
        </p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        Adresini, Haydial hazır olduğunda sana e-posta ile haber vermek için saklıyoruz. Ayrıntılar:{" "}
        <a
          href="/aydinlatma"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          KVKK Aydınlatma Metni
        </a>
      </p>
    </form>
  );
}
