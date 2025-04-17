// RoadmapContainer.js
// Main container component for the roadmap

import React, { useState } from "react";
import { Flag } from "lucide-react"; // Adjust based on your icon library
import RoadmapNode from "./roadmapnode";
import StepDetailsModal from "./stepdetailsmodal";

/**
 * Container component for the roadmap visualization
 */
const RoadmapContainer = ({ steps, title }) => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {title && <h2 className="text-2xl font-bold mb-8">{title}</h2>}

      <div className="relative">
        {/* Main vertical line */}
        <div className="absolute left-1/2 w-1 bg-gray-200 top-0 bottom-0 transform -translate-x-1/2 z-0 hidden md:block"></div>
        <div className="absolute left-4 w-1 bg-gray-200 top-0 bottom-0 z-0 block md:hidden"></div>

        {/* Map through steps to create nodes */}
        <div className="py-6 space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <RoadmapNode
              key={index}
              step={step}
              index={index}
              totalSteps={steps.length}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Finish node */}
        <div className="text-center relative mt-16 md:mt-24">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-4 border-green-500 flex items-center justify-center shadow-md hidden md:flex">
            <Flag className="h-5 w-5 text-green-500" />
          </div>
          <div className="absolute left-4 top-0 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border-4 border-green-500 flex items-center justify-center shadow-md md:hidden">
            <Flag className="h-4 w-4 text-green-500" />
          </div>
          <div className="mt-10 ml-16 md:ml-0 bg-white rounded-xl p-5 shadow-sm inline-block max-w-md text-left md:text-center">
            <p className="font-medium text-gray-800">
              Ready to build amazing web applications!
            </p>
          </div>
        </div>
      </div>

      {/* Step details modal */}
      <StepDetailsModal
        step={selectedStep}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default RoadmapContainer;
