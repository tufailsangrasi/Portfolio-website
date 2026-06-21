interface EmailSuccessProps {
  onReset: () => void;
}

export default function EmailSuccess({ onReset }: EmailSuccessProps) {
  return (
    <div className="text-center py-12 px-4">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 border border-border bg-background-alt"
        aria-hidden
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1F2024"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="text-[1.3rem] font-bold text-foreground mb-2">Message Sent!</h3>
      <p className="text-muted text-[0.9rem] mb-6">
        Thanks for reaching out. I&apos;ll get back to you as soon as possible.
      </p>
      <button onClick={onReset} className="btn-outline">
        Send Another Message
      </button>
    </div>
  );
}