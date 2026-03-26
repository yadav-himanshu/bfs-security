"use client";

import { useState } from "react";
import { servicesData } from "@/lib/servicesData";
import { Send, CheckCircle } from "lucide-react";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Failed to submit quote request.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Failed to submit. Try again.");
    }
  };

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
        <button onClick={() => setStatus("idle")} className="button">
          Request Another Quote
        </button>
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

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full button py-4 text-lg flex items-center justify-center gap-3 shadow-lg shadow-[var(--highlight-color)]/20 hover:scale-[1.02] transition-transform duration-300 relative z-10 disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "sending" ? (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-[var(--bg-color)] border-t-transparent rounded-full animate-spin"></span>
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            Request Quote <Send className="w-5 h-5" />
          </span>
        )}
      </button>

      {status === "error" && (
        <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center relative z-10">
          {errorMsg}
        </div>
      )}
    </form>
  );
}
