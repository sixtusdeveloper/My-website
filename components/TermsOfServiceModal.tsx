// components/TermsOfServiceModal.tsx

import React from 'react';
import Modal from '@/components/Modal';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Terms of Service">
      <p className="text-sm text-gray-600">Last updated: September 1, 2024</p>
      <h2 className="text-lg font-bold mt-4">Acceptance of Terms</h2>
      <p>
        By accessing or using my website, you agree to be bound by these Terms of Service and my Privacy Policy. If you do not agree, please do not use my website.
      </p>
      
      <h2 className="text-lg font-bold mt-4">Use of My Services</h2>
      <p>
        You agree to use my website and services only for lawful purposes and in a manner that does not infringe the rights of others. You must not use my services to:
      </p>
      <ul className="list-disc pl-5 mt-2">
        <li>Engage in illegal activities.</li>
        <li>Distribute harmful or malicious content.</li>
        <li>Harass or harm other users.</li>
      </ul>
      
      <h2 className="text-lg font-bold mt-4">Account Responsibilities</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify me immediately of any unauthorized use of your account.
      </p>
      
      <h2 className="text-lg font-bold mt-4">Service Modifications</h2>
      <p>
        I reserve the right to modify or discontinue any part of my services at any time without prior notice. I will not be liable for any changes or interruptions in service.
      </p>
      
      <h2 className="text-lg font-bold mt-4">Limitation of Liability</h2>
      <p>
        My liability is limited to the fullest extent permitted by law. I am not liable for any indirect, incidental, or consequential damages arising out of your use of my services.
      </p>
      
      <h2 className="text-lg font-bold mt-4">Indemnification</h2>
      <p>
        You agree to indemnify and hold me harmless from any claims, losses, or damages resulting from your use of my services or violation of these Terms of Service.
      </p>
      
      <h2 className="text-lg font-bold mt-4">Governing Law</h2>
      <p>
        These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].
      </p>
      
      <h2 className="text-lg font-bold mt-4">Changes to These Terms</h2>
      <p>
        I may update these Terms of Service from time to time. I will notify you of any significant changes by posting the new terms on my website.
      </p>
      
      <h2 className="text-lg font-bold mt-4">Contact Me</h2>
      <p>
        If you have any questions about these Terms of Service, please contact me at <a href="mailto:support@sixtusdev.net" className="text-blue-600 hover:underline">support@sixtusdev.net</a>.
      </p>
    </Modal>
  );
};

export default TermsOfServiceModal;
