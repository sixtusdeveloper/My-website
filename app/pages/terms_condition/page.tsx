import React from "react";

const TermsCondition: React.FC = () => {
  return (
    <main className="bg-secondary lg:p-8 p-2">
      <div className="container mx-auto lg:px-10 p-2">
        <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-sm">Last updated: March 05, 2025</p>
        <h2 className="text-lg font-bold mt-4">Introduction</h2>
        <p>
          I value your privacy and am committed to protecting your personal
          information. This Privacy Policy outlines how I collect, use, and
          safeguard your data when you use my website and services.
        </p>

        <h2 className="text-lg font-bold mt-4">Information I Collect</h2>
        <p>
          I collect various types of information to enhance your experience on
          my website. This includes:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, contact
            information, etc., that you provide to me directly.
          </li>
          <li>
            <strong>Usage Data:</strong> Information on how you interact with my
            website, including IP addresses, browser types, and pages visited.
          </li>
          <li>
            <strong>Cookies:</strong> Small data files stored on your device to
            remember your preferences and improve your browsing experience.
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-4">How I Use Your Information</h2>
        <p>Your information is used for various purposes, including:</p>
        <ul className="list-disc pl-5 mt-2">
          <li>Providing and maintaining my services.</li>
          <li>Improving user experience and personalizing content.</li>
          <li>Communicating with you about updates, offers, and news.</li>
          <li>Analyzing website usage and performance to make enhancements.</li>
        </ul>

        <h2 className="text-lg font-bold mt-4">How I Share Your Information</h2>
        <p>
          I do not sell or rent your personal information. I may share it in the
          following circumstances:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>Service Providers:</strong> With third-party vendors who
            assist me in operating my website and services.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law or to
            protect my rights and safety.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of assets.
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-4">Your Rights</h2>
        <p>
          You have the following rights regarding your personal information:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            <strong>Access:</strong> Request a copy of the personal data I hold
            about you.
          </li>
          <li>
            <strong>Correction:</strong> Update or correct any inaccurate
            information.
          </li>
          <li>
            <strong>Deletion:</strong> Request the removal of your personal
            data, subject to legal obligations.
          </li>
          <li>
            <strong>Opt-Out:</strong> Unsubscribe from marketing communications
            at any time.
          </li>
        </ul>

        <h2 className="text-lg font-bold mt-4">Security</h2>
        <p>
          I implement appropriate technical and organizational measures to
          protect your personal information from unauthorized access,
          disclosure, or destruction.
        </p>

        <h2 className="text-lg font-bold mt-4">Changes to This Policy</h2>
        <p>
          I may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>

        <h2 className="text-lg font-bold mt-4">Contact Me</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact me at{" "}
          <a
            href="mailto:contact@sixtusdev.net"
            className="hover:text-blue-600 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text hover:underline"
          >
            contact@sixtusdev.net
          </a>
          .
        </p>

        <div className="flex items-center flex-wrap py-4">
          <p className="text-base mt-8">
            You may as well read the Privacy Policy of this application{" "}
            <a
              href="https://www.sixtusdev.net/pages/privacy_policy"
              className="hover:text-blue-600 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text hover:underline"
            >
              Privacy Policy
            </a>
          </p>

          <p className="text-base mt-8">
            &nbsp;OR go back to the website{" "}
            <a
              href="https://www.sixtusdev.net/"
              className="hover:text-blue-600 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text hover:underline"
            >
              Home Page
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsCondition;
