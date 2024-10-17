import Script from "next/script";

const GrowScript = () => {
  return (
    <Script
      id="grow-script"
      strategy="lazyOnload"
      data-grow-initializer=""
      dangerouslySetInnerHTML={{
        __html: `

!(function () {

window.growMe || ((window.growMe = function (e) { window.growMe._.push(e); }), (window.growMe._ = []));

var e = document.createElement("script");

e.type = "text/javascript";

e.src = "https://faves.grow.me/main.js";

e.defer = true;

e.setAttribute("data-grow-faves-site-id", "U2l0ZTo5NWQzZjFhYi1jYjYzLTQ0NWQtYTVmOC1mNWEyYmU5OGVmOGQ=");

var t = document.getElementsByTagName("script")[0];

t.parentNode.insertBefore(e, t);

})();

`,
      }}
    />
  );
};

export default GrowScript;
