"use client";

import { useEffect } from "react";

export default function InstagramFontFix() {
  useEffect(() => {
    if (/Instagram|FBAN|FBAV/i.test(navigator.userAgent)) {
      document.documentElement.classList.add("insta-browser");
    }
  }, []);

  return null;
}