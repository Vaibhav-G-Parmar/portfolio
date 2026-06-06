"use client";

import { useActionState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle, Download, Loader2, Mail, Phone, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SlabHeading } from "@/components/ui/slab-heading";
import { contactHeading, contactLead, siteProfile } from "@/content/site";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

const EASE = [0.16, 1, 0.3, 1] as const;
const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "font-mono w-full border-0 border-b border-[var(--hairline)] bg-transparent px-0 py-3 text-[15px] text-foreground placeholder:text-zinc-500 outline-none transition focus:border-emerald-500 dark:placeholder:text-zinc-600";

const quickLinkClass =
  "group inline-flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-[0.14em] text-zinc-600 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400";

function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <AnimatePresence mode="wait">
      {state.status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 border border-emerald-500/40 bg-emerald-500/[0.06] px-5 py-5"
        >
          <CheckCircle className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden />
          <div>
            <p className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400">Message sent</p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          ref={formRef}
          action={formAction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
          noValidate
        >
          {state.status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5 border border-red-500/40 bg-red-500/[0.06] px-4 py-3"
            >
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-red-500" aria-hidden />
              <p className="text-[13px] text-red-600 dark:text-red-400">{state.message}</p>
            </motion.div>
          )}

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="kicker mb-3 block text-zinc-500 dark:text-zinc-400">
                Name
              </label>
              <input id="contact-name" name="name" type="text" required minLength={2} placeholder="Your name" className={inputClass} disabled={isPending} />
            </div>
            <div>
              <label htmlFor="contact-email" className="kicker mb-3 block text-zinc-500 dark:text-zinc-400">
                Email
              </label>
              <input id="contact-email" name="email" type="email" required placeholder="you@example.com" className={inputClass} disabled={isPending} />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="kicker mb-3 block text-zinc-500 dark:text-zinc-400">
              Message
            </label>
            <textarea id="contact-message" name="message" required minLength={10} maxLength={2000} rows={4} placeholder="What's on your mind?" className={`${inputClass} resize-none`} disabled={isPending} />
          </div>

          <motion.button
            type="submit"
            disabled={isPending}
            className="inline-flex items-center gap-2 bg-emerald-600 px-8 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-white disabled:opacity-60 dark:bg-emerald-500 dark:text-zinc-950"
            whileHover={{ scale: isPending ? 1 : 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18, ease: EASE }}
          >
            {isPending ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
            {isPending ? "Sending..." : "Send message"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export function Contact() {
  return (
    <AnimatedSection id="contact" className="slab slab--alt scroll-mt-20">
      <div className="slab__inner">
        <SlabHeading index="05" label="Contact" title={contactHeading} titleId="contact-heading" />

        <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="max-w-md text-[clamp(1rem,1.6vw,1.25rem)] leading-[1.7] text-zinc-600 dark:text-zinc-300">
              {contactLead}
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <a href={`mailto:${siteProfile.email}`} aria-label={`Email ${siteProfile.email}`} className={quickLinkClass}>
                <Mail className="size-4" aria-hidden /> {siteProfile.email}
              </a>
              <a href={`tel:${siteProfile.phone}`} className={quickLinkClass}>
                <Phone className="size-4" aria-hidden /> {siteProfile.phoneDisplay}
              </a>
              <a href={siteProfile.linkedin} target="_blank" rel="noopener noreferrer" className={quickLinkClass}>
                LinkedIn <ArrowUpRight className="size-4" aria-hidden />
              </a>
              <a href="/resume.pdf" download className={quickLinkClass}>
                <Download className="size-4" aria-hidden /> Download resume
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
