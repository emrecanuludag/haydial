import { createServerFn } from "@tanstack/react-start";

import { emailSchema, forwardToWaitlist } from "./waitlist-store";

export const joinWaitlist = createServerFn({ method: "POST" })
  .inputValidator((input: { email: string }) => ({ email: emailSchema.parse(input.email) }))
  .handler(async ({ data }) => {
    const saved = await forwardToWaitlist(data.email.toLowerCase(), {
      url: process.env["WAITLIST_WEBHOOK_URL"],
      secret: process.env["WAITLIST_WEBHOOK_SECRET"],
    });
    return { saved };
  });
