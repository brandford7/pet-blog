import Script from "next/script";
import React from "react";

const HydroAds = () => {
  return (
    <>
      <Script
        id="hydro-tracking"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.Hydro_tagId = "bd50ff4d-4a65-4a09-be2c-a707e30fb646";
          (function(h,y,d,r,o){
            h[d]=h[d]||function(){(h[d].q=h[d].q||[]).push(arguments)};
            var s=y.createElement('script');
            s.async=1;
            s.src='https://track.hydro.online/';
            y.head.appendChild(s);
          })(window,document,'Hydro');
        `,
        }}
      />
    </>
  );
};

export default HydroAds;
