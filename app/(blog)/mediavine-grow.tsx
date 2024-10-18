"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function GrowMeScript() {
  useEffect(() => {
    // Initialize growMe
    window.growMe =
      window.growMe ||
      function (e: any) {
        (window.growMe._ = window.growMe._ || []).push(e);
      };
    window.growMe._ = window.growMe._ || [];
  }, []);

  return (
    <Script
      id="grow-me-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var e = document.createElement("script");
          e.type = "text/javascript";
          e.src = "https://faves.grow.me/main.js";
          e.defer = true;
          e.setAttribute("data-grow-faves-site-id", "U2l0ZTo5NWQzZjFhYi1jYjYzLTQ0NWQtYTVmOC1mNWEyYmU5OGVmOGQ=");
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t);
        `,
      }}
    />
  );
}
