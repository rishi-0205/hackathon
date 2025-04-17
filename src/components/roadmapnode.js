// RoadmapNode.js
// Component for each individual node in the roadmap

import React from "react";
import { ArrowRight } from "lucide-react"; // Adjust import based on your icon library

/**
 * Renders an individual node in the roadmap
 */
const RoadmapNode = ({ step, index, totalSteps, onOpenDetails }) => {
  const isEven = index % 2 === 0;
  const nodeNumber = index + 1;

  return (
    <div className="roadmap-node">
      {/* Desktop view with zigzag pattern */}
      <div className="hidden md:flex w-full items-center relative">
        {/* Left side content (for even nodes) */}
        <div className={`w-1/2 ${isEven ? "block" : "invisible"}`}>
          <div className="flex justify-end pr-12">
            <div
              onClick={() => onOpenDetails(step)}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 transition-all duration-200 hover:shadow-lg relative cursor-pointer hover:bg-gray-50 w-full max-w-sm"
            >
              <div className="absolute top-1/2 right-0 transform translate-x-[10px] -translate-y-1/2 w-12 h-0.5 bg-gray-300"></div>
              <h3 className="text-lg font-semibold text-blue-600 flex items-center justify-between">
                {step.title}
                <ArrowRight className="h-4 w-4 text-blue-600 ml-2" />
              </h3>
            </div>
          </div>
        </div>

        {/* Center connector area with number */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-10 h-10 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-md">
            <span className="text-sm font-bold text-blue-600">
              {nodeNumber}
            </span>
          </div>
        </div>

        {/* Right side content (for odd nodes) */}
        <div className={`w-1/2 ${!isEven ? "block" : "invisible"}`}>
          <div className="pl-12">
            <div
              onClick={() => onOpenDetails(step)}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200 transition-all duration-200 hover:shadow-lg relative cursor-pointer hover:bg-gray-50 w-full max-w-sm"
            >
              <div className="absolute top-1/2 left-0 transform -translate-x-[10px] -translate-y-1/2 w-12 h-0.5 bg-gray-300"></div>
              <h3 className="text-lg font-semibold text-blue-600 flex items-center justify-between">
                {step.title}
                <ArrowRight className="h-4 w-4 text-blue-600 ml-2" />
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile display (always on right with circle on left) */}
      <div className="md:hidden flex items-center relative mb-10">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <div className="w-8 h-8 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-md">
            <span className="text-xs font-bold text-blue-600">
              {nodeNumber}
            </span>
          </div>
        </div>
        <div className="ml-16 mr-4 w-full">
          <div
            onClick={() => onOpenDetails(step)}
            className="bg-white rounded-xl p-5 shadow-md border border-gray-200 transition-all duration-200 hover:shadow-lg cursor-pointer hover:bg-gray-50"
          >
            <h3 className="text-md font-semibold text-blue-600 flex items-center justify-between">
              {step.title}
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapNode;
