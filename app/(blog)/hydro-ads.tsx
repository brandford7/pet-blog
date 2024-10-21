import Script from "next/script";
import React from "react";

const HydroAds = () => {
  return (
    <div>
      <Script
        id="hydro_config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.Hydro_tagId = "bd50ff4d-4a65-4a09-be2c-a707e30fb646";
          `,
        }}
      />
      <Script
        id="hydro_script"
        strategy="lazyOnload"
        src="https://track.hydro.online/"
      />
    </div>
  );
};

export default HydroAds;
