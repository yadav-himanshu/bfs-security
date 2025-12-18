"use client";

import { useState, useEffect } from "react";

interface ApplyFormProps {
  position?: string;
}

export default function ApplyForm({ position: initialPosition = "" }: ApplyFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: initialPosition,
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (initialPosition) {
      setForm((prev) => ({ ...prev, position: initialPosition }));
    }
  }, [initialPosition]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-sm rounded-2xl p-8 shadow-lg border transition-all duration-500 max-w-3xl mx-auto grid gap-4"
        style={{
          borderColor: "var(--card-border-color)",
        }}
      >
        <h2
          className="text-2xl font-bold text-center mb-4"
          style={{ color: "var(--highlight-color)" }}
        >
          Apply for a Position
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="input"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="input"
        />

        <select
          name="position"
          value={form.position}
          onChange={handleChange}
          required
          className="input"
        >
          <option value="">Select Position</option>
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          placeholder="Write a short message..."
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="input"
        />

        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFile}
          required
          className="input cursor-pointer"
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="button bg-[var(--highlight-color)] text-gray-900 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_10px_var(--highlight-color)]/30"
        >
          {status === "sending" ? "Sending..." : "Submit Application"}
        </button>
      </form>

      <div className="max-w-3xl mx-auto mt-5 text-center text-sm">
        {status === "success" && (
          <p className="text-green-400 animate-pulse">Application sent successfully!</p>
        )}
        {status === "error" && <p className="text-red-400">{errorMsg}</p>}
      </div>
    </>
  );
}
