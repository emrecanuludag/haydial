import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

const TITLE = "KVKK Aydınlatma Metni · Haydial";
const DESC = "Haydial web sitesi ve erken erişim listesi için KVKK aydınlatma metni.";
const BASVURU_EPOSTA = "info@psikiyatri.pro";
const BASVURU_FORMU = "https://psikiyatri.pro/static/docs/Veri-Sahibi-Basvuru-Formu-Luminda.docx";

export const Route = createFileRoute("/aydinlatma")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Aydinlatma,
});

function Bolum({ baslik, children }: { baslik: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl">{baslik}</h2>
      <div className="mt-4 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}

function Aydinlatma() {
  const baglanti = "underline underline-offset-2 hover:text-brand";
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Haydial
      </a>
      <h1 className="mt-6 font-display text-4xl">KVKK Aydınlatma Metni</h1>
      <p className="mt-3 text-muted-foreground">Haydial web sitesi ve erken erişim listesi</p>

      <div className="mt-8 space-y-4 leading-relaxed">
        <p>
          Hasan Uludağ — Şahıs Şirketi (Luminda) (Şirket), 6698 sayılı Kişisel Verilerin Korunması
          Kanunu (Kanun) ve ilgili mevzuat kapsamında Veri Sorumlusu sıfatıyla kişisel veri işleme
          faaliyeti yürütmektedir.
        </p>
        <p>
          Adres: Gürselpaşa Mah. 75572 Sk. Tekin Park Sitesi B Blok No: 2/1 İç Kapı No: 19,
          Seyhan/Adana. E-posta:{" "}
          <a href={`mailto:${BASVURU_EPOSTA}`} className={baglanti}>
            {BASVURU_EPOSTA}
          </a>
        </p>
        <p>
          Şirketimiz tarafından haydial.ai adresli web sitemiz (Web Sitesi) üzerinden işlenen
          kişisel veriler için işbu KVKK Aydınlatma Metni ile ilgili kişilere kişisel veri işleme
          faaliyetleri için bilgilendirme sağlamaktayız. Bu metin Web Sitesi ziyaretini ve erken
          erişim listesini kapsar. Haydial mobil uygulaması için ayrıca bilgilendirme yapılacaktır.
        </p>
      </div>

      <Bolum baslik="1. Kişisel Verileriniz ve İşlenme Amaçları">
        <p>
          Erken erişim listesine katılan kişilerin; e-posta adresi, listeye katılma tarihi ve kaydın
          geldiği kaynak bilgisi işlenmektedir. İşleme amaçları; erken erişim listesinin
          oluşturulması ve yönetilmesi, Haydial kullanıma açıldığında ilgili kişiye e-posta ile
          haber verilmesi, talep/şikayetlerin takibi, bilgi güvenliği süreçlerinin yürütülmesi ve
          faaliyetlerin mevzuata uygun yürütülmesidir.
        </p>
        <p>
          Web Sitesi ziyaretçilerinin; IP adresi, cihaz bilgisi ve işlem logları, Web Sitesinin
          işleyişi ve güvenliği için altyapı hizmeti alınan şirketlerin sistemlerinde kayıt altına
          alınabilmektedir. İşleme amaçları; bilgi güvenliği süreçlerinin yürütülmesi, veri
          sorumlusu operasyonlarının güvenliğinin temini ve faaliyetlerin mevzuata uygun
          yürütülmesidir.
        </p>
        <p>
          Web Sitesinde, altyapı sağlayıcı Cloudflare’in bot trafiğini ayırt etmek için kullandığı
          zorunlu __cf_bm çerezi bulunmaktadır. Reklam veya analiz çerezi kullanılmamaktadır.
        </p>
        <p>
          Şirketimize ulaşan veriler, ancak gerekli olduğu kadar sisteme işlenir. Fazlalık bilgiler,
          sisteme kaydedilmez, silinir ya da anonim hale getirilir.
        </p>
      </Bolum>

      <Bolum baslik="2. Kişisel Verilerinizin Aktarılması">
        <p>
          Web Sitesi üzerinden işlenen kişisel veriler, Web Sitesinin işleyişinin ve erken erişim
          listesinin saklanmasının sağlanabilmesi amacıyla zorunlu olarak hizmet alınan web altyapı
          ve sunucu sağlayıcı şirketlere; Şirket’in hukuki yükümlülüklerini yerine getirebilmesi
          amacıyla yetkili kamu kurum ve kuruluşlarına aktarılabilmektedir.
        </p>
        <p>
          Şirketimiz tarafından hizmet alınan web altyapı ve sunucu sağlayıcı şirketlerin
          sunucularının yurt dışında bulunması nedeniyle yurt dışına veri aktarımı yapılmaktadır.
        </p>
      </Bolum>

      <Bolum baslik="3. Kişisel Verilerinizin Toplanma Yöntemi ve Hukuki Sebebi">
        <p>
          Şirketimizce işlenen kişisel veriler; ilgili kişinin Web Sitesindeki erken erişim formunu
          doldurarak dijital olarak paylaşması, ilgili kişinin diğer iletişim kanalları üzerinden
          paylaşması, Web Sitesinde kullanılan çerez ve Web Sitesi ziyareti sırasında altyapı
          sağlayıcıların sistemlerinde teknik kayıt oluşması yollarından biri veya birkaçı ile elde
          edilmektedir.
        </p>
        <p>
          Veri işleme faaliyetlerimiz; kanunlarda açıkça öngörülmesi (m.5/2-a), bir sözleşmenin
          kurulması veya ifasıyla doğrudan doğruya ilgili olması kaydıyla sözleşmenin taraflarına
          ait kişisel verilerin işlenmesinin gerekli olması (m.5/2-c), ilgili kişinin temel hak ve
          özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için veri
          işlenmesinin zorunlu olması (m.5/2-f) hukuki nedenlerinden bir veya birkaçına
          dayanmaktadır.
        </p>
      </Bolum>

      <Bolum baslik="4. Kişisel Verilerinizin Saklanması">
        <p>
          Erken erişim listesindeki e-posta adresiniz, Haydial’ın kullanıma açıldığı size
          bildirilene veya silinmesini talep edene kadar saklanır. İşleme amacı ortadan kalktığında
          veriniz silinir, yok edilir veya anonim hale getirilir. Silinen kayıtlar yedeklerden,
          yedeklerin olağan yenilenme süreci içinde çıkar.
        </p>
      </Bolum>

      <Bolum baslik="5. Kişisel Verilerinize İlişkin Haklarınız">
        <p>
          Kanun m. 11 kapsamında kişisel verilerinizin; işlenip işlenmediğini öğrenme, işlenen
          verilerinize ilişkin bilgi talep etme, işleme amacını ve amaca uygun kullanılıp
          kullanılmadığını öğrenme, yurt içinde ve yurt dışında aktarıldığı üçüncü kişileri öğrenme,
          eksik veya yanlış işlenen verilerin düzeltilmesini isteme, işleme amacının ortadan
          kalkması halinde silinmesini veya yok edilmesini isteme, yapılan düzeltme veya silme/yok
          etme işlemlerinin veri aktarılan üçüncü kişilere bildirilmesini isteme, işlenen
          verilerinizin analiz edilmesi ile aleyhinize bir sonuç oluşturulmasına itiraz etme, hukuka
          aykırı işlenmesinden doğan zararın giderilmesini talep etme haklarınız bulunmaktadır.
        </p>
        <p>
          Bu haklarınızı kullanmak amacıyla{" "}
          <a href={BASVURU_FORMU} className={baglanti}>
            Veri Sahibi Başvuru Formu
          </a>
          ’nu doldurarak{" "}
          <a href={`mailto:${BASVURU_EPOSTA}`} className={baglanti}>
            {BASVURU_EPOSTA}
          </a>{" "}
          adresine, e-posta konu başlığına “Kişisel Verilerin Korunması Kanunu Kapsamında Bilgi
          Talebi” yazarak iletebilirsiniz. Başvurunuzda Haydial erken erişim listesiyle ilgili
          olduğunu belirtiniz.
        </p>
      </Bolum>

      <p className="mt-10 text-sm text-muted-foreground">Yürürlük Tarihi: 02.11.2026</p>
    </main>
  );
}
