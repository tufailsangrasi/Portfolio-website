"use client";
import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";
import { achievements } from "@/data";
import Icon from "@/components/ui/Icon";

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = achievements[activeIndex];

  return (
    <section id="achievements" ref={ref} className="section-pad bg-background-alt">
      <div className="container-x">
        <h2 className="section-heading reveal">Achievements</h2>

        <div
          className="reveal flex flex-col md:flex-row gap-8 md:gap-10 items-start"
          style={{ transitionDelay: "0.1s" }}
        >
          {/* ── Sidebar list ─────────────────────────────────────── */}
          <div className="w-full md:w-[280px] shrink-0">
            {achievements.map((ach, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`ach-sidebar-item w-full text-left ${
                  activeIndex === i ? "active" : ""
                }`}
              >
                <p className="font-bold text-[0.95rem] text-foreground mb-1 leading-snug">
                  {ach.title}
                </p>
                <p className="text-muted text-[0.8rem]">{ach.organization}</p>
              </button>
            ))}
          </div>

          {/* ── Detail card ──────────────────────────────────────── */}
          <div className="flex-1 min-w-0 bg-card border border-border rounded-xl p-6 md:p-8 shadow-soft">
            {active.date && (
              <div className="flex items-center gap-2 text-link-accent text-[0.85rem] mb-4">
                <CalendarDays size={15} strokeWidth={2} />
                <span>{active.date}</span>
              </div>
            )}

            <h3 className="text-[1.25rem] md:text-[1.35rem] font-bold text-foreground mb-2">
              {active.title}
            </h3>

            {active.url && (
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-muted hover:text-foreground text-[0.85rem] mb-5 transition-colors"
              >
                {active.urlLabel ?? "View"}
                <Icon name="external" size={13} />
              </a>
            )}

            <p className="text-muted text-[0.92rem] leading-relaxed mb-5">
              {active.description}
            </p>

            {active.bullets && active.bullets.length > 0 && (
              <>
                <p className="text-foreground font-bold text-[0.78rem] tracking-[0.08em] mb-3">
                  KEY ACHIEVEMENTS
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted text-[0.9rem] leading-relaxed">
                  {active.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}