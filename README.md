# Haydial

Build a minimal, elegant single-page "coming soon" landing page for a brand called "Haydial" (domain: haydial.ai). Content: the wordmark "Haydial", a one-line tagline "Something new is coming.", and a simple email signup field (store emails in the database if available, otherwise just show a thank-you message). Clean modern design, dark/light friendly, mobile responsive. No other pages. Keep it small; real content will be added later.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://haydial.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c02a262a-6965-451c-bfb2-2d46c4a05125).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Bekleme listesi

Formun altında `/aydinlatma` sayfasına bağlantı var. Metin `psikiyatri.pro/pro/kvkk` aydınlatma metninden uyarlandı.

Form, e-postayı sunucu tarafından bir webhook'a iletir ve yalnızca webhook 2xx dönerse teşekkür gösterir. Yayındaki ortamda şu değişkenler tanımlı olmalıdır:

- `WAITLIST_WEBHOOK_URL`: `{ email, source, createdAt }` JSON gövdesini POST ile alan adres. Üretimde `https://luminda.pro/api/haydial/waitlist`; kayıtlar brain-ops'ta `/docker/haydial/waitlist/waitlist.db`.
- `WAITLIST_WEBHOOK_SECRET` (isteğe bağlı): `Authorization: Bearer ...` olarak gönderilir.

`WAITLIST_WEBHOOK_URL` tanımlı değilse form hata gösterir ve e-posta kaydedilmez.
