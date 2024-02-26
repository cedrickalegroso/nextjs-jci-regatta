"use client";

import Script from "next/script";

const SiteScripts: React.FC = () => {
  return (
    <>
      <Script
        src="jquery.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Script Loaded");
        }}
      />
      <Script
        src="vendors.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Script Loaded");
        }}
      />
      <Script
        src="main.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Script Loaded");
        }}
      />
    </>
  );
};

export default SiteScripts;
