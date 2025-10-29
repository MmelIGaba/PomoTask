import React from 'react';

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-primary text-text p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold mb-6">Privacy Notice</h2>
        <div className="space-y-4 text-lg leading-relaxed">
          <p>
            This website collects minimal personal information through the contact form to respond to inquiries.
            Your data is processed in accordance with GDPR and South African data protection laws.
          </p>
          <h3 className="text-2xl font-bold mt-6 mb-4">Data Collection</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Name and email address from contact form submissions</li>
            <li>IP address and basic analytics for website improvement</li>
            <li>Cookies for theme preference and session management</li>
          </ul>
          <h3 className="text-2xl font-bold mt-6 mb-4">Data Usage</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Responding to your messages and inquiries</li>
            <li>Improving website functionality and user experience</li>
            <li>Basic analytics to understand visitor interests</li>
          </ul>
          <h3 className="text-2xl font-bold mt-6 mb-4">Your Rights</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to data portability</li>
          </ul>
          <p className="mt-6">
            For privacy-related questions, contact me at{' '}
            <a href="mailto:msgwebworks@gmail.com" className="text-accent hover:underline">
              msgwebworks@gmail.com
            </a>
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-8 bg-accent text-primary px-6 py-3 rounded-lg font-bold hover:bg-accent/80 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyModal;
