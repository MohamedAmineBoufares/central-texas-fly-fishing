"use client";

import { useState, useEffect } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export function useMobile(breakpoint: Breakpoint = "md") {
  // Default to false for SSR
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const getBreakpointValue = (bp: Breakpoint): number => {
      // Get breakpoint values from CSS variables if possible
      const root = document.documentElement;
      const value = getComputedStyle(root)
        .getPropertyValue(`--breakpoint-${bp}`)
        .trim();

      // If CSS variable exists and is valid, use it
      if (value) {
        const numValue = Number.parseInt(value);
        if (!isNaN(numValue)) {
          return numValue;
        }
      }

      // Fallback values
      switch (bp) {
        case "xs":
          return 480;
        case "sm":
          return 640;
        case "md":
          return 768;
        case "lg":
          return 1024;
        case "xl":
          return 1280;
        default:
          return 768;
      }
    };

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < getBreakpointValue(breakpoint));
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, [breakpoint]);

  return isMobile;
}

export function useBreakpoint() {
  // Default to md for SSR
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>("md");

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;

      // Try to get values from CSS variables
      const root = document.documentElement;
      const style = getComputedStyle(root);

      const xs =
        Number.parseInt(style.getPropertyValue("--breakpoint-xs").trim()) ||
        480;
      const sm =
        Number.parseInt(style.getPropertyValue("--breakpoint-sm").trim()) ||
        640;
      const md =
        Number.parseInt(style.getPropertyValue("--breakpoint-md").trim()) ||
        768;
      const lg =
        Number.parseInt(style.getPropertyValue("--breakpoint-lg").trim()) ||
        1024;
      //   const xl =
      //     Number.parseInt(style.getPropertyValue("--breakpoint-xl").trim()) ||
      //     1280;

      if (width < xs) {
        setCurrentBreakpoint("xs");
      } else if (width < sm) {
        setCurrentBreakpoint("sm");
      } else if (width < md) {
        setCurrentBreakpoint("md");
      } else if (width < lg) {
        setCurrentBreakpoint("lg");
      } else {
        setCurrentBreakpoint("xl");
      }
    };

    // Initial check
    checkBreakpoint();

    // Add event listener
    window.addEventListener("resize", checkBreakpoint);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkBreakpoint);
    };
  }, []);

  return currentBreakpoint;
}
