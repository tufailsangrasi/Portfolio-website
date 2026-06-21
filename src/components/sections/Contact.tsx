"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { personalInfo } from "@/data";
import Icon from "@/components/ui/Icon";
import GithubLink from "@/components/ui/GithubLink";
import EmailSuccess from "@/components/cards/EmailSuccess";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Please fill in every field.");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    const apiBase = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";
    const endpoint = `${apiBase}/api/contact`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        return;
      }

      let message = "Something went wrong. Please try again.";
      try {
        const data = await res.json();
        if (data?.detail) message = Array.isArray(data.detail) ? data.detail[0]?.msg ?? message : data.detail;
      } catch {
        // response wasn't JSON — keep the generic message
      }
      setErrorMsg(message);
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="section-pad bg-background">
      <div className="container-x">
        <h2 className="section-heading reveal">
          <span className="underline-word">Get</span> In Touch
        </h2>

        <div className="reveal grid gap-12 lg:grid-cols-2 lg:gap-16" style={{ transitionDelay: "0.1s" }}>
          {/* ── Left: Contact information ─────────────────────────────── */}
          <div>
            <h3 className="text-[1.1rem] font-bold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background-alt border border-border text-foreground">
                  <Mail size={16} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-muted text-[0.78rem] mb-0.5">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-foreground text-[0.92rem] hover:text-link-accent transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background-alt border border-border text-foreground">
                  <Phone size={16} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-muted text-[0.78rem] mb-0.5">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="text-foreground text-[0.92rem] hover:text-link-accent transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background-alt border border-border text-foreground">
                  <MapPin size={16} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-muted text-[0.78rem] mb-0.5">Location</p>
                  <p className="text-foreground text-[0.92rem]">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <h4 className="text-foreground text-[0.9rem] font-semibold mb-3">
              Connect With Me
            </h4>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-circle"
              >
                <GithubLink url={personalInfo.github} size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-circle"
              >
                <Icon name="linkedin" size={18} />
              </a>
            </div>
          </div>

          {/* ── Right: Send a message ────────────────────────────────── */}
          <div>
            {status === "success" ? (
              <EmailSuccess onReset={() => setStatus("idle")} />
            ) : (
              <>
                <h3 className="text-[1.1rem] font-bold text-foreground mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-muted text-[0.82rem] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-muted text-[0.82rem] mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Example@gmail.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-muted text-[0.82rem] mb-1.5"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Hello Tufail, I'd like to discuss a project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      disabled={status === "loading"}
                      className="form-input"
                      style={{ resize: "none" }}
                    />
                  </div>

                  {status === "error" && errorMsg && (
                    <p className="text-red-500 text-[0.85rem]">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary justify-center w-full"
                    style={{
                      opacity: status === "loading" ? 0.7 : 1,
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                    }}
                  >
                    <Send size={16} />
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}