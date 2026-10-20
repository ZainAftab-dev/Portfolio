"use client";

import { useEffect, useRef, useState } from "react";
import { faqs } from "@/data/content";

type Msg = { from: "me" | "zn"; text: string };

/** FAQ as a small chat: tap a question chip, see a typing indicator, get the answer. */
export function FaqChat() {
  const [log, setLog] = useState<Msg[]>([
    { from: "zn", text: "Hi! 👋 I'm Zain. Pick any question below and I'll answer it." },
  ]);
  const [asked, setAsked] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [log, typing]);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const ask = (n: number) => {
    if (typing || asked.includes(n)) return;
    const f = faqs[n];
    setAsked((a) => [...a, n]);
    setLog((l) => [...l, { from: "me", text: f.q }]);
    setTyping(true);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = setTimeout(() => {
      setTyping(false);
      setLog((l) => [...l, { from: "zn", text: f.a }]);
    }, reduced ? 50 : 900);
  };

  return (
    <div className="fq-chat">
      <div className="fq-top">
        <span className="fq-av">ZA</span>
        <span>
          <b>Zain Aftab</b>
          <small>Usually replies within a day</small>
        </span>
      </div>
      <div className="fq-log" aria-live="polite" ref={logRef}>
        {log.map((m, k) => (
          <div key={k} className={`fq-bub ${m.from}`}>
            {m.text}
          </div>
        ))}
        {typing && (
          <div className="fq-typing" aria-label="Zain is typing">
            <i></i>
            <i></i>
            <i></i>
          </div>
        )}
      </div>
      <div className="fq-chips">
        {faqs.map((f, n) => (
          <button key={f.short} className="fq-chip" disabled={asked.includes(n)} onClick={() => ask(n)}>
            {f.short}
          </button>
        ))}
      </div>
    </div>
  );
}
