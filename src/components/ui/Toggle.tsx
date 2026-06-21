"use client";
import { Menu, X } from "lucide-react";

interface ToggleProps {
  open: boolean;
  onToggle: () => void;
}

export default function Toggle({ open, onToggle }: ToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-foreground hover:bg-background-alt transition-colors"
    >
      {open ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}