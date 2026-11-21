"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinkClass =
  "inline-flex items-center gap-1.5 whitespace-nowrap text-[0.58rem] leading-none tracking-[0.2em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[0.62rem] sm:tracking-[0.22em] md:tracking-[0.24em]";

const dropLinkClass =
  "block px-5 py-3.5 text-left text-[0.78rem] font-light tracking-[0.02em] text-primary transition-colors hover:bg-[#1a1612] hover:text-[#E8DFD0] focus-visible:bg-[#1a1612] focus-visible:outline-none";

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
          className={`h-1.5 w-2.5 shrink-0 text-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
        className={`absolute top-full left-1/2 z-30 mt-4 w-[14rem] -translate-x-1/2 border border-white/12 bg-black transition-all duration-200 ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
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
