"use client";

import { useState, useEffect } from "react";
import { Send, CheckCircle } from "lucide-react";

interface ApplyFormProps {
  position?: string;
}

export default function ApplyForm({
  position: initialPosition = "",
}: ApplyFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: initialPosition,
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialPosition) {
      setForm((prev) => ({ ...prev, position: initialPosition }));
    }
  }, [initialPosition]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResume(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    if (resume) formData.append("resume", resume);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: formData });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          position: initialPosition,
          message: "",
        });
        setResume(null);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Failed to submit. Try again.");
    }
  };

  const positions = [
    "Security Guard",
    "Bouncer",
    "Bodyguard",
    "Caretaker",
    "Liftman",
    "Lady Guard",
    "Driver",
  ];

  if (status === "success") {
    return (
      <div className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-3xl p-12 text-center shadow-xl flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-[var(--highlight-color)]/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-[var(--highlight-color)]" />
        </div>
        <h3 className="text-3xl font-bold text-[var(--heading-color)] mb-4">Application Submitted!</h3>
        <p className="text-[var(--subheading-color)] text-lg mb-8 max-w-md mx-auto">
          Thank you for applying to Bombay Facility Services. Our HR team will review your application and contact you shortly.
        </p>
        <button onClick={() => setStatus("idle")} className="button">
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-[var(--card-bg-color)] border border-[var(--card-border-color)] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden max-w-3xl mx-auto"
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--highlight-color)]/5 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="mb-10 text-center relative z-10">
          <h2 className="text-3xl font-extrabold text-[var(--heading-color)] mb-3">
            Career Application
          </h2>
          <p className="text-[var(--subheading-color)]">Fill out the details below to complete your submission.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-6 relative z-10">
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

        <div className="grid sm:grid-cols-2 gap-6 mb-6 relative z-10">
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
            <label className="text-sm font-semibold text-[var(--heading-color)] ml-1">Position Applying For</label>
            <select
              name="position"
              value={form.position}
              onChange={handleChange}
              required
              className="w-full bg-[var(--bg-color)] border border-[var(--card-border-color)] rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--highlight-color)] focus:ring-1 focus:ring-[var(--highlight-color)] transition-all duration-300 text-[var(--text-color)] shadow-sm appearance-none"
            >
              <option value="" disabled>Select Position</option>
              {positions.map((pos) => (
                <option key={pos} value={pos} className="bg-[var(--card-bg-color)] text-[var(--text-color)]">
                  {pos}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-6 relative z-10">
          <label className="text-sm font-semibold text-[var(--heading-color)] ml-1">Cover Letter / Message</label>
          <textarea
            name="message"
            placeholder="Tell us why you are a great fit for this role..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-[var(--bg-color)] border border-[var(--card-border-color)] rounded-xl px-5 py-4 focus:outline-none focus:border-[var(--highlight-color)] focus:ring-1 focus:ring-[var(--highlight-color)] transition-all duration-300 text-[var(--text-color)] placeholder:text-[var(--subheading-color)]/50 shadow-sm resize-none"
          />
        </div>

        <div className="flex flex-col gap-2 mb-10 relative z-10">
          <label className="text-sm font-semibold text-[var(--heading-color)] ml-1">Upload Resume (PDF, DOCX)</label>
          <div className="w-full bg-[var(--bg-color)] border border-dashed border-[var(--card-border-color)] rounded-xl px-5 py-6 focus-within:border-[var(--highlight-color)] transition-all duration-300 hover:bg-[var(--highlight-color)]/5">
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFile}
              required
              className="w-full text-[var(--subheading-color)] file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--highlight-color)]/20 file:text-[var(--highlight-color)] hover:file:bg-[var(--highlight-color)]/30 cursor-pointer"
            />
          </div>
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
              Submit Application <Send className="w-5 h-5" />
            </span>
          )}
        </button>

        {status === "error" && (
          <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-center relative z-10">
            {errorMsg}
          </div>
        )}
      </form>
    </>
  );
}
