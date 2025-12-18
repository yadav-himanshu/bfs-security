"use client";

import { useState } from "react";
import { servicesData } from "@/lib/servicesData";

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

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="card hover:shadow-lg transition-all duration-500"
        style={{
          backgroundColor: "var(--card-bg-color)",
          borderColor: "var(--card-border-color)",
          boxShadow: "0 0 10px rgba(0,0,0,0.15)",
        }}
      >
        <div className="grid gap-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="input"
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select Service</option>
            {servicesData.map((s) => (
              <option
                key={s.id}
                value={s.title}
                style={{
                  backgroundColor: "var(--card-bg-color)",
                  color: "var(--text-color)",
                }}
              >
                {s.title}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Additional Details"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="input"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="button"
            style={{
              backgroundColor: "var(--highlight-color)",
              color: "var(--card-bg-color)",
              boxShadow: "0 0 10px var(--highlight-color)",
            }}
          >
            {status === "sending" ? "Sending..." : "Request Quote"}
          </button>
        </div>
      </form>

      {/* Status Message */}
      <div className="max-w-2xl mx-auto mt-5 text-center text-sm body-text">
        {status === "success" && (
          <p style={{ color: "var(--highlight-color)" }} className="animate-pulse">
            Quote request sent successfully!
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "var(--accent-color)" }}>{errorMsg}</p>
        )}
      </div>
    </>
  );
}
