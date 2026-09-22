"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { personalData } from "@/data/personal";
import { validateContactForm } from "@/lib/validation";
import { Container } from "@/ui/Container";
import { SectionTitle } from "@/ui/SectionTitle";
import { BentoCard } from "@/ui/BentoCard";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clientValidation = validateContactForm(formData);
    if (!clientValidation.isValid) {
      setErrors(clientValidation.errors as Record<string, string>);
      return;
    }

    setStatus("submitting");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Your message has been received successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.message || "Submission failed. Please check the inputs.");
        if (data.errors) {
          setErrors(data.errors);
        }
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error. Please try again or reach out directly via email.");
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <Container>
        <SectionTitle
          badge="Direct Inquiries"
          title="Get in Touch"
          description="Have a question or interested in collaborating? Send a message directly below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contact Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <BentoCard className="p-6 sm:p-8 flex flex-col gap-6" glow>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">
                    Contact Details
                  </h3>
                  <span className="text-xs text-[var(--text-secondary)]">
                    Available for professional opportunities
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="p-4 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Email</span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--text-accent)] transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <Phone className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Phone</span>
                    <a
                      href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--text-accent)] transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[var(--surface-input)] border border-[var(--border-subtle)] flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Location</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                      {personalData.location}
                    </span>
                  </div>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <BentoCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Message Sent!</span>
                      <span>{responseMsg}</span>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 flex items-start gap-3 text-sm">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block">Error</span>
                      <span>{responseMsg}</span>
                    </div>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                  >
                    Your Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    disabled={status === "submitting"}
                    className={`w-full p-3.5 rounded-xl bg-[var(--surface-input)] backdrop-blur-md border text-sm text-[var(--text-primary)] placeholder-purple-300/30 outline-none transition-all duration-200 ${
                      errors.name
                        ? "border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500"
                        : "border-[var(--border-subtle)] focus:border-purple-400 focus:bg-purple-950/20 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.name}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                  >
                    Your Email <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    disabled={status === "submitting"}
                    className={`w-full p-3.5 rounded-xl bg-[var(--surface-input)] backdrop-blur-md border text-sm text-[var(--text-primary)] placeholder-purple-300/30 outline-none transition-all duration-200 ${
                      errors.email
                        ? "border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500"
                        : "border-[var(--border-subtle)] focus:border-purple-400 focus:bg-purple-950/20 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-[var(--text-primary)] mb-1.5"
                  >
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can I assist you with data analytics, ML, or software projects?"
                    disabled={status === "submitting"}
                    className={`w-full p-3.5 rounded-xl bg-[var(--surface-input)] backdrop-blur-md border text-sm text-[var(--text-primary)] placeholder-purple-300/30 outline-none transition-all duration-200 resize-y ${
                      errors.message
                        ? "border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500"
                        : "border-[var(--border-subtle)] focus:border-purple-400 focus:bg-purple-950/20 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-rose-400 mt-1 block">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary py-3.5 justify-center text-sm mt-1"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </BentoCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
