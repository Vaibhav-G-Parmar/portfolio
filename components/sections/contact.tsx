"use client";

import { useActionState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, ArrowUpRight, CheckCircle, Download, Loader2, Mail, Phone, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { contactHeading, contactLead, siteProfile } from "@/content/site";
import { sendContactEmail, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "font-mono w-full border border-emerald-600/25 bg-background/60 px-4 py-3 text-[13px] text-foreground placeholder:text-zinc-500 outline-none transition focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 dark:border-emerald-400/20 dark:bg-zinc-900/60 dark:placeholder:text-zinc-600";

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
          className="flex items-start gap-3 border border-emerald-600/35 bg-emerald-600/[0.07] px-5 py-4 dark:border-emerald-400/30 dark:bg-emerald-400/[0.06]"
        >
          <CheckCircle className="mt-0.5 size-5 shrink-0 text-emerald-500" aria-hidden />
          <div>
            <p className="font-mono text-[13px] font-semibold text-emerald-700 dark:text-emerald-400">
              Message sent
            </p>
            <p className="font-mono mt-1 text-[12px] text-zinc-600 dark:text-zinc-400">
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
          className="space-y-3"
          noValidate
        >
          {state.status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5 border border-red-500/30 bg-red-500/[0.06] px-4 py-3"
            >
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-red-500" aria-hidden />
              <p className="font-mono text-[12px] text-red-600 dark:text-red-400">
                {state.message}
              </p>
            </motion.div>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="font-mono mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                minLength={2}
                placeholder="Your name"
                className={inputClass}
                disabled={isPending}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="font-mono mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className={inputClass}
                disabled={isPending}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="font-mono mb-1.5 block text-[10px] uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-500">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={10}
              maxLength={2000}
              rows={4}
              placeholder="What's on your mind?"
              className={`${inputClass} resize-none`}
              disabled={isPending}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isPending}
            className="font-mono inline-flex items-center gap-2 border border-emerald-600 bg-emerald-700 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white disabled:opacity-60 dark:border-emerald-500 dark:bg-emerald-600"
            whileHover={{ scale: isPending ? 1 : 1.02, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.97 }}
          >
            {isPending ? (
              <Loader2 className="size-4 animate-spin" aria-hidden />
            ) : (
              <Send className="size-4" aria-hidden />
            )}
            {isPending ? "Sending..." : "Send message"}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="relative border border-emerald-600/30 bg-background/75 dark:border-emerald-400/25 dark:bg-zinc-950/80">
        <div className="p-8 sm:p-10">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-700 dark:text-emerald-500">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-4 max-w-xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl"
          >
            {contactHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-zinc-700 dark:text-zinc-300">
            {contactLead}
          </p>

          {/* Quick links */}
          <StaggerContainer className="font-mono mt-8 flex flex-wrap items-center gap-3" staggerDelay={0.08} delay={0.1}>
            <StaggerItem>
              <motion.a
                href={`mailto:${siteProfile.email}`}
                aria-label={`Email ${siteProfile.email}`}
                className="inline-flex items-center justify-center gap-2 border border-emerald-600 bg-emerald-700 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white dark:border-emerald-500 dark:bg-emerald-600"
                whileHover={{ scale: 1.03, transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="size-4" aria-hidden />
                Email
              </motion.a>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href={`tel:${siteProfile.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-emerald-600/35 bg-background/80 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 backdrop-blur-sm"
                whileHover={{ scale: 1.03, borderColor: "rgba(16,185,129,0.6)", transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="size-4" aria-hidden />
                {siteProfile.phoneDisplay}
              </motion.a>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href={siteProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-emerald-600/35 bg-background/80 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 backdrop-blur-sm"
                whileHover={{ scale: 1.03, borderColor: "rgba(16,185,129,0.6)", transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                LinkedIn
                <ArrowUpRight className="size-4" aria-hidden />
              </motion.a>
            </StaggerItem>
            <StaggerItem>
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 border border-emerald-600/35 bg-background/80 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/90 backdrop-blur-sm"
                whileHover={{ scale: 1.03, borderColor: "rgba(16,185,129,0.6)", transition: { duration: 0.18 } }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="size-4" aria-hidden />
                Download resume
              </motion.a>
            </StaggerItem>
          </StaggerContainer>

          {/* Inline contact form */}
          <div className="mt-10 border-t border-emerald-600/20 pt-8 dark:border-emerald-400/15">
            <p className="font-mono mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:text-emerald-500">
              Or send a message directly
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
