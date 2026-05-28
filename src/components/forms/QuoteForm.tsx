"use client";

import { servicesData } from "@/lib/data/servicesData";
import { Send, CheckCircle } from "lucide-react";
import { useQuoteForm } from "@/hooks/useQuoteForm";
import { Button } from "@/components/ui/Button";

export default function QuoteForm() {
  const {
    form,
    status,
    errorMsg,
    handleChange,
    handleSubmit,
    resetForm,
  } = useQuoteForm();

  if (status === "success") {
    return (
      <div className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-3xl p-12 text-center shadow-xl flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-[var(--highlight-color)]/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-[var(--highlight-color)]" />
        </div>
        <h3 className="text-3xl font-bold text-[var(--heading-color)] mb-4">Quote Requested!</h3>
        <p className="text-[var(--subheading-color)] text-lg mb-8 max-w-md mx-auto">
          We received your request. A member of our team will contact you shortly with a personalized quote.
        </p>
        <Button onClick={resetForm} variant="primary">
          Request Another Quote
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden w-full"
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--highlight-color)]/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="mb-8 relative z-10">
        <h2 className="text-2xl font-extrabold text-[var(--heading-color)] mb-2">
          Request Form
        </h2>
        <p className="text-[var(--subheading-color)] text-sm">Tell us what you need, and we&apos;ll handle the rest.</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5 relative z-10">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[var(--heading-color)] ml-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-[var(--bg-color)] border border-[var(--card-border-color)] rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--highlight-color)] focus:ring-1 focus:ring-[var(--highlight-color)] transition-all duration-300 text-[var(--text-color)] placeholder:text-[var(--subheading-color)]/50 shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[var(--heading-color)] ml-1">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-[var(--bg-color)] border border-[var(--card-border-color)] rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--highlight-color)] focus:ring-1 focus:ring-[var(--highlight-color)] transition-all duration-300 text-[var(--text-color)] placeholder:text-[var(--subheading-color)]/50 shadow-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5 relative z-10">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[var(--heading-color)] ml-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full bg-[var(--bg-color)] border border-[var(--card-border-color)] rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--highlight-color)] focus:ring-1 focus:ring-[var(--highlight-color)] transition-all duration-300 text-[var(--text-color)] placeholder:text-[var(--subheading-color)]/50 shadow-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-[var(--heading-color)] ml-1">Service Required</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full bg-[var(--bg-color)] border border-[var(--card-border-color)] rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--highlight-color)] focus:ring-1 focus:ring-[var(--highlight-color)] transition-all duration-300 text-[var(--text-color)] shadow-sm appearance-none"
          >
            <option value="" disabled>Select Service</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.title} className="bg-[var(--card-bg-color)] text-[var(--text-color)]">
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-8 relative z-10">
        <label className="text-sm font-semibold text-[var(--heading-color)] ml-1">Additional Details</label>
        <textarea
          name="message"
          placeholder="Any specific requirements (duration, location, count)..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="w-full bg-[var(--bg-color)] border border-[var(--card-border-color)] rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--highlight-color)] focus:ring-1 focus:ring-[var(--highlight-color)] transition-all duration-300 text-[var(--text-color)] placeholder:text-[var(--subheading-color)]/50 shadow-sm resize-none"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={status === "sending"}
        className="w-full relative z-10"
      >
        Request Quote <Send className="w-5 h-5" />
      </Button>

      {status === "error" && (
        <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center relative z-10">
          {errorMsg}
        </div>
      )}
    </form>
  );
}
