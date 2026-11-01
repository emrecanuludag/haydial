import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Haydial — Coming soon" },
      { name: "description", content: "Something new is coming from Haydial. Join the list to hear first." },
      { property: "og:title", content: "Haydial — Coming soon" },
      { property: "og:description", content: "Something new is coming from Haydial. Join the list to hear first." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const emailSchema = z.string().trim().email().max(255);

function Index() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailSchema.safeParse(email).success) {
      setError("Please enter a valid email.");
      return;
    }
    setError("");
    setDone(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-foreground">
      <div className="w-full max-w-md text-center">
        <h1 className="animate-rise font-display text-6xl font-light tracking-tight sm:text-7xl">Haydial</h1>
        <p className="animate-rise mt-4 text-base text-muted-foreground [animation-delay:150ms]">
          Something new is coming.
        </p>
        <div className="animate-rise mt-10 [animation-delay:300ms]">
          {done ? (
            <p className="text-sm">Thank you — we'll be in touch.</p>
          ) : (
            <form onSubmit={submit} className="flex gap-2 border-b border-border pb-2 focus-within:border-foreground transition-colors">
              <input
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <button type="submit" className="text-sm font-medium transition-opacity hover:opacity-60">
                Notify me →
              </button>
            </form>
          )}
          {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
        </div>
      </div>
      <footer className="absolute bottom-6 text-xs text-muted-foreground">haydial.ai</footer>
    </main>
  );
}
