import React from "react";

export default function Page() {
  return (
    <div className="mt-2 max-w-[800px] p-4 md:mx-20 shadow-2xl article bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Welcome to apped.me ("we," "our," or "us"). By accessing or using our website, you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use our website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Use of the Website</h2>
      <ul className="list-disc list-inside mb-4">
        <li>You must be at least 13 years old to use our website.</li>
        <li>You agree not to use the website for any illegal or unauthorized purpose.</li>
        <li>
          You must not modify, adapt, or hack the website or modify another website to falsely imply it is associated with our website.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2">User Content</h2>
      <p className="mb-4">
        By submitting content to our website, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute such content. You are solely responsible for the content you submit and agree not to submit any content that is illegal, offensive, or violates any third-party rights.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Privacy</h2>
      <p className="mb-4">
        Our Privacy Policy, available on our website, explains how we collect and use your information. By using our website, you agree to the collection and use of information in accordance with the Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend access to our website immediately, without prior notice or liability, for any reason.
      </p>
    </div>
  );
}
