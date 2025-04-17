// index.js
// Main package entry point

import Roadmap from "./roadmap";

export default Roadmap;

// Also export individual components for custom usage
export { default as RoadmapContainer } from "./roadmapcontainer";
export { default as RoadmapNode } from "./roadmapnode";
export { default as StepDetailsModal } from "./stepdetailsmodal";
