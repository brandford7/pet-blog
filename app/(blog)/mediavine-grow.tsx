import Script from "next/script";

/*import Script from "next/script";

const GrowScript = () => {
  return (
    <Script
      id="grow-script"
      strategy="afterInteractive"
      data-grow-initializer=""
      dangerouslySetInnerHTML={{
        __html: `!(function(){
        window.growMe||((window.growMe=function(e){
        window.growMe._.push(e)
        ;}),(window.growMe._=[]));
        var e=document.createElement("script");
        (e.type="text/javascript"),
        (e.src="https://faves.grow.me/main.js"),
        (e.defer=!0),
        e.setAttribute("data-grow-faves-site-id","U2l0ZTphZGQzM2EyZS00OWJjLTQzMzctOGNkOS03NGIxY2M4ZDg2ZTM=");
        var t=document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e,t);})();`,
      }}
    />
  );
};

export default GrowScript;
*/
export default function GrowScript() {
  return (
    <>
      <Script
        id="grow-script"
        strategy="afterInteractive"
        src="https://faves.grow.me/main.js"
        data-grow-faves-site-id="U2l0ZTphZGQzM2EyZS00OWJjLTQzMzctOGNkOS03NGIxY2M4ZDg2ZTM="
      />
      <Script id="grow-init" strategy="afterInteractive">
        {`
          window.growMe = window.growMe || function(e) {
            (window.growMe._ = window.growMe._ || []).push(e);
          };
        `}
      </Script>
    </>
  );
}