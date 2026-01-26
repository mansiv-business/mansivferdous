"use client";

import { useEffect } from "react";

export default function InstagramFontFix() {
  useEffect(() => {
    const ua = navigator.userAgent;
    const isInAppBrowser = /Instagram|FBAN|FBAV|FB_IAB|FB4A/i.test(ua);

    if (isInAppBrowser) {

      document.documentElement.classList.add("insta-browser");


      const hasAttempted = sessionStorage.getItem('redirect-attempted');
      
      if (!hasAttempted) {
        sessionStorage.setItem('redirect-attempted', 'true');
        
        const currentUrl = window.location.href;

        if (/Android/i.test(ua)) {

          const intentUrl = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;end`;
          window.location.href = intentUrl;
        } else if (/iPhone|iPad|iPod/i.test(ua)) {

          setTimeout(() => {
            window.location.href = `x-safari-${currentUrl}`;
          }, 100);
          
          setTimeout(() => {
            window.open(currentUrl, '_blank');
          }, 500);
        }
      }
    }
  }, []);

  return null;
}
