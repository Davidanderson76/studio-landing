"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/sendContactEmail";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setError("");

    try {
      // Get client IP from Vercel headers
      const ip = (formData.get("x-forwarded-for") as string) || "unknown";

      await sendContactEmail(formData, ip);
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="px-6 py-24 bg-neutral-900 text-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Booking inquiries, collaborations, or questions.
        </p>

        {submitted ? (
          <p className="text-center text-lg text-gray-300">
            Thanks — we’ll be in touch soon.
          </p>
        ) : (
          <form action={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="website"
              className="hidden"
              autoComplete="off"
            />

            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-white transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-white transition"
            />
            <textarea
              name="message"
              placeholder="Tell us a bit about what you're working on"
              rows={5}
              required
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-md focus:outline-none focus:border-white transition resize-none"
            />

            {error && (
              <p className="text-sm text-red-400 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full border border-white py-3 uppercase tracking-wide text-sm hover:bg-white hover:text-black transition">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
