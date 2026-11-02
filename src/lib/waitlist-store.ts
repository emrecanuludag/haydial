import { z } from "zod";

export const emailSchema = z.string().trim().email().max(255);

export type WaitlistConfig = { url?: string | undefined; secret?: string | undefined };

/**
 * E-postayı yapılandırılmış webhook'a iletir. Yalnızca hedef 2xx dönerse true döner;
 * form teşekkür mesajını buna göre gösterir. Loglara e-posta adresi yazılmaz.
 */
export async function forwardToWaitlist(
  email: string,
  { url, secret }: WaitlistConfig,
  fetchImpl: typeof fetch = fetch,
): Promise<boolean> {
  if (!url) {
    console.error("Bekleme listesi: WAITLIST_WEBHOOK_URL tanımlı değil.");
    return false;
  }
  try {
    const response = await fetchImpl(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(secret ? { authorization: `Bearer ${secret}` } : {}),
      },
      body: JSON.stringify({ email, source: "haydial-site", createdAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) console.error(`Bekleme listesi: webhook ${response.status} döndü.`);
    return response.ok;
  } catch (error) {
    console.error("Bekleme listesi: webhook'a ulaşılamadı.", error);
    return false;
  }
}
