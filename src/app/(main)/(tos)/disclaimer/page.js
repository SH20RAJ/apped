import React from "react";

export default function Disclaimer() {
  return (
    <div className="mt-2 max-w-[800px] p-4 md:mx-20 shadow-2xl article bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Disclaimer</h1>
      <p className="mb-4">
        The information provided on apped.me ("we," "our," or "us") is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
      </p>

      <h2 className="text-2xl font-semibold mb-2">External Links Disclaimer</h2>
      <p className="mb-4">
        The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Professional Disclaimer</h2>
      <p className="mb-4">
        The site cannot and does not contain legal advice. The legal information is provided for general informational and educational purposes only and is not a substitute for professional advice.
      </p>
    </div>
  );
}
