"use client";

import { useState, useEffect } from "react";

export function useApplyForm(initialPosition = "") {
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
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResume(e.target.files?.[0] || null);
  };

  const resetForm = () => {
    setStatus("idle");
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

  return {
    form,
    resume,
    status,
    errorMsg,
    positions,
    handleChange,
    handleFile,
    handleSubmit,
    resetForm,
  };
}
