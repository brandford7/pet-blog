"use client";

import Script from "next/script";

export default function GrowScript() {
  return (
    <>
      <Script id="grow-initializer" strategy="afterInteractive">
        {`
          window.growMe || ((window.growMe = function(e) {
            window.growMe._.push(e);
          }), (window.growMe._ = []));
        `}
      </Script>
      <Script
        id="grow-main"
        src="https://faves.grow.me/main.js"
        strategy="afterInteractive"
        data-grow-faves-site-id="U2l0ZTo5NWQzZjFhYi1jYjYzLTQ0NWQtYTVmOC1mNWEyYmU5OGVmOGQ="
      />
    </>
  );
}
