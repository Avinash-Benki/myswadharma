"use client";

import { useEffect } from "react";

export function StaticLanding({ html }: { html: string }) {
  useEffect(() => {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    const onMenu = () => {
      if (!navLinks || !menuBtn) return;
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };

    const onNavLinkClick = () => {
      if (!navLinks || !menuBtn) return;
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    };

    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", onMenu);
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", onNavLinkClick);
      });
    }

    const reveals = document.querySelectorAll(".reveal");
    let observer: IntersectionObserver | undefined;

    if (reveals.length && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      reveals.forEach((el) => observer?.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("visible"));
    }

    return () => {
      if (menuBtn && navLinks) {
        menuBtn.removeEventListener("click", onMenu);
        navLinks.querySelectorAll("a").forEach((link) => {
          link.removeEventListener("click", onNavLinkClick);
        });
      }
      observer?.disconnect();
    };
  }, [html]);

  return (
    <div id="static-landing-root" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
