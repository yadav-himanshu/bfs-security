"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const { form, status, errorMsg, handleChange, handleSubmit } = useContactForm();

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full text-[var(--text-color)]"
      >
        <div className="grid gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input placeholder-opacity-60"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="input placeholder-opacity-60"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="input placeholder-opacity-60"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
            className="input placeholder-opacity-60"
          />

          <Button
            type="submit"
            variant="primary"
            isLoading={status === "sending"}
          >
            Send Message
          </Button>
        </div>
      </form>

      {/* Status Message */}
      <div className="max-w-2xl mx-auto mt-5 text-center text-sm">
        {status === "success" && (
          <p className="text-green-500 font-semibold animate-pulse">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 font-semibold">{errorMsg}</p>
        )}
      </div>
    </>
  );
}
