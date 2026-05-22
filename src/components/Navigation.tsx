"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const navLinks = [
  { name: "home.", href: "/" },
  { name: "skills.", href: "#skills" },
  { name: "about.", href: "#about" },
  { name: "projects.", href: "#projects" },
  { name: "contact.", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial setup: hide overlay above the screen
    gsap.set(overlayRef.current, { yPercent: -100 });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (isOpen) {
      // Slide overlay down
      tl.to(overlayRef.current, {
        yPercent: 0,
        duration: 0.8,
        ease: "power4.inOut",
      })
      // Stagger in the links
      .fromTo(
        linksRef.current?.children ? Array.from(linksRef.current.children) : [],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.4"
      );
    } else {
      // Slide overlay back up
      tl.to(overlayRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
      });
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  return (
    <>
      {/* The Toggle Button (White Dot) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-40 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 mix-blend-difference"
        aria-label="Open Menu"
      />

      {/* Full Screen Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-50 bg-[#0a0a0a] text-white px-8 md:px-24 py-16 flex flex-col justify-between"
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="text-4xl hover:text-gray-400 transition-colors"
          >
            &#10005; {/* CSS 'X' character */}
          </button>
        </div>

        {/* Massive Typography Links */}
        <div ref={linksRef} className="flex flex-col text-6xl md:text-8xl font-bold tracking-tighter lowercase">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 transition-colors w-fit"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Footer Details (Email & Socials) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 uppercase tracking-widest text-xs md:text-sm text-gray-400">
          <div>
            <p className="mb-2">E-mail</p>
            <a href="mailto:ayush.patel@example.com" className="text-white hover:underline lowercase">
              ayush.patel@example.com
            </a>
          </div>
          <div>
            <p className="mb-2">Social Media</p>
            <div className="flex gap-4 text-white font-mono">
              <a href="#" className="hover:text-gray-400">{`{ INSTAGRAM }`}</a>
              <a href="#" className="hover:text-gray-400">{`{ LINKEDIN }`}</a>
              <a href="#" className="hover:text-gray-400">{`{ GITHUB }`}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}