"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const linkClass =
  "block py-4 text-[0.72rem] tracking-[0.28em] text-primary uppercase transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring";

const subLinkClass =
  "block py-3 pl-1 text-[0.68rem] font-light tracking-[0.12em] text-primary/75 transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring";

const navItems = [
  { href: "/the-five-tables", label: "The Five Tables" },
  { href: "/experiences", label: "Experiences" },
  { href: "/#early-access", label: "Membership" },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setAboutOpen(false);
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="relative z-[60] flex h-10 w-10 items-center justify-center text-primary transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="relative block h-3.5 w-5" aria-hidden>
          <span
            className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-out ${
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 block h-px w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ease-out ${
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-0 z-50 bg-black transition-[opacity,visibility] duration-300 ease-out ${
          open
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1280px] flex-col px-6 pt-20 pb-10 sm:px-10">
          <nav
            aria-label="Primary mobile"
            className={`mx-auto flex w-full max-w-sm flex-1 flex-col justify-center transition-transform duration-300 ease-out ${
              open ? "translate-y-0" : "translate-y-3"
            }`}
          >
            <div className="border-t border-white/10">
              <Link href="/" className={linkClass} onClick={close}>
                Home
              </Link>
            </div>

            <div className="border-t border-white/10">
              <button
                type="button"
                className={`${linkClass} flex w-full items-center justify-between text-left`}
                aria-expanded={aboutOpen}
                onClick={() => setAboutOpen((value) => !value)}
              >
                About
                <svg
                  viewBox="0 0 12 8"
                  className={`h-1.5 w-2.5 shrink-0 text-primary transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
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
                className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                  aboutOpen
                    ? "max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-white/6 pb-2">
                  <Link
                    href="/about"
                    className={subLinkClass}
                    onClick={close}
                  >
                    About Five Tables
                  </Link>
                  <Link
                    href="/founding-table-hosts"
                    className={subLinkClass}
                    onClick={close}
                  >
                    Founding Table Hosts
                  </Link>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <div key={item.href} className="border-t border-white/10">
                <Link href={item.href} className={linkClass} onClick={close}>
                  {item.label}
                </Link>
              </div>
            ))}

            <div className="border-t border-b border-white/10" />
          </nav>

          <div className="mx-auto flex w-full max-w-sm flex-col gap-4 pt-8">
            <Link
              href="/#early-access"
              onClick={close}
              className="inline-flex w-full items-center justify-center border border-primary/80 px-5 py-3.5 text-[0.62rem] tracking-[0.22em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Member Login
            </Link>
            <Link
              href="/#early-access"
              onClick={close}
              className="inline-flex w-full items-center justify-center bg-primary px-5 py-3.5 text-[0.62rem] tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
