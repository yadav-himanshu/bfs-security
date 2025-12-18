"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
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
        className="p-8 rounded-2xl shadow-lg backdrop-blur-sm border transition-all duration-500 hover:shadow-[0_0_20px_var(--highlight-color)]/10"
        style={{
          backgroundColor: "var(--card-bg-color)",
          borderColor: "var(--card-border-color)",
          color: "var(--text-color)",
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

          <button
            type="submit"
            disabled={status === "sending"}
            className="button hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_10px_var(--accent-color)]/30"
            style={{
              backgroundColor: "var(--highlight-color)",
              color: "var(--input-text)",
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      {/* Status Message */}
      <div className="max-w-2xl mx-auto mt-5 text-center text-sm">
        {status === "success" && (
          <p style={{ color: "limegreen" }} className="animate-pulse">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p style={{ color: "#f87171" }}>{errorMsg}</p> // red tone
        )}
      </div>
    </>
  );
}
