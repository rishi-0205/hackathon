// StepDetailsModal.js
// Modal component for displaying detailed step information

import React from "react";
import { ExternalLink } from "lucide-react"; // Adjust based on your icon library

/**
 * Modal to display detailed information for a roadmap step
 *
 * @param {Object} props
 * @param {import('./RoadmapTypes').RoadmapStep|null} props.step - The step to display
 * @param {boolean} props.isOpen - Whether the modal is open
 * @param {Function} props.onClose - Function to call when modal is closed
 */
const StepDetailsModal = ({ step, isOpen, onClose }) => {
  if (!step) return null;

  // This is a basic modal implementation
  // Replace with your preferred modal component or library
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-6 z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            ✕
          </button>
        </div>

        <div className="mt-4">
          <div className="text-gray-700">
            <p className="whitespace-pre-wrap">{step.description}</p>
          </div>

          {step.links && step.links.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Resources:</h4>
              <ul className="space-y-2">
                {step.links.map((link, i) => (
                  <li key={i} className="flex items-start">
                    <ExternalLink className="h-4 w-4 mr-2 mt-1 flex-shrink-0 text-primary" />
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepDetailsModal;
