import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="mt-2 max-w-[800px] p-4 md:mx-20 shadow-2xl article bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy explains how apped.me ("we," "our," or "us") collects, uses, and protects your information when you use our website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information Collection</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personal identification information (name, email address, phone number, etc.)</li>
        <li>Technical data (IP address, browser type, operating system, etc.)</li>
        <li>Usage data (pages visited, time spent on the website, etc.)</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Use of Information</h2>
      <p className="mb-4">
        We use the information we collect to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Provide and maintain our services.</li>
        <li>Improve and personalize user experience.</li>
        <li>Communicate with you, including for customer support.</li>
        <li>Analyze usage and trends to enhance our website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">Data Protection</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Third-Party Disclosure</h2>
      <p className="mb-4">
        We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Your Consent</h2>
      <p className="mb-4">
        By using our site, you consent to our website's privacy policy.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us at privacy@apped.me.
      </p>
    </div>
  );
}
