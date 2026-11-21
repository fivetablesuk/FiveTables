"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinkClass =
  "inline-flex items-center gap-1.5 text-[0.58rem] leading-none tracking-[0.18em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.62rem] sm:tracking-[0.2em] md:text-[0.65rem] md:tracking-[0.22em]";

const dropLinkClass =
  "block px-5 py-3 text-left text-[0.7rem] font-light tracking-[0.04em] text-primary transition-colors hover:bg-white/5 hover:text-foreground focus-visible:bg-white/5 focus-visible:outline-none sm:text-[0.75rem]";

export function AboutNavDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={navLinkClass}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        About
        <svg
          viewBox="0 0 12 8"
          className={`h-2 w-2.5 shrink-0 text-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          aria-hidden
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        role="menu"
        className={`absolute top-full left-1/2 z-30 mt-3 w-[13.5rem] -translate-x-1/2 border border-white/15 bg-black transition-all duration-200 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <Link
          href="/about"
          role="menuitem"
          className={dropLinkClass}
          onClick={() => setOpen(false)}
        >
          About Five Tables
        </Link>
        <Link
          href="/founding-table-hosts"
          role="menuitem"
          className={dropLinkClass}
          onClick={() => setOpen(false)}
        >
          Founding Table Hosts
        </Link>
      </div>
    </div>
  );
}
