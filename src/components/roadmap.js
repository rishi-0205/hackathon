// Roadmap.js
// Main export for the roadmap component

import React from "react";
import RoadmapContainer from "./roadmapcontainer";
import "./roadmap-styles.css";

/**
 * Roadmap visualization component
 *
 * @param {Object} props
 * @param {string} props.title - The title of the roadmap
 * @param {import('./RoadmapTypes').RoadmapStep[]} props.steps - Array of steps for the roadmap
 */
const Roadmap = ({ title, steps }) => {
  return <RoadmapContainer title={title} steps={steps} />;
};

export default Roadmap;
