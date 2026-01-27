"use client";

import { useEffect } from "react";

export default function InstagramFontFix() {
  useEffect(() => {
    const ua = navigator.userAgent;
    const isInAppBrowser = /Instagram|FBAN|FBAV|FB_IAB|FB4A/i.test(ua);

    if (isInAppBrowser) {
      document.documentElement.classList.add("insta-browser");
    }
  }, []);

  return null;
}
