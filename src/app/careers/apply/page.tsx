"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ApplyForm from "@/components/ApplyForm";

// This inner component actually uses useSearchParams()
function ApplyPageContent() {
  const searchParams = useSearchParams();
  const position = searchParams.get("position") || "";

  return (
    <section
      className="py-20 text-[var(--text-color)]"
      style={{
        transition: "background 0.5s ease, color 0.5s ease",
      }}
    >
      <PageHeader
        title="Apply for a Position"
        subtitle={`Fill out the form to apply for the position: ${position}`}
      />

      <div className="max-w-4xl mx-auto px-6 mt-12">
        <ApplyForm position={position} />
      </div>
    </section>
  );
}

// ✅ Wrap it in a <Suspense> boundary to fix build error
export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ApplyPageContent />
    </Suspense>
  );
}
