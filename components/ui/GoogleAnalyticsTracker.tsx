import Script from "next/script";

export const GoogleAnalyticsTracking = () => {
  return (
    <>
      {/* Google Tag Manager */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16486749894" />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16486749894');
        `}
      </Script>
    </>
 );
}