import React, { useState, useEffect } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import Modal from "./modal";
import roadmapData from "./roadmapData.json";

function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    const generatedNodes = roadmapData.steps.map((step, index) => ({
      id: `node-${index}`,
      data: { label: step.title },
      position: { x: 250 * index, y: 0 },
    }));

    const generatedEdges = roadmapData.steps.slice(1).map((_, index) => ({
      id: `edge-${index}`,
      source: `node-${index}`,
      target: `node-${index + 1}`,
      type: "smoothstep",
    }));

    setNodes(generatedNodes);
    setEdges(generatedEdges);
  }, []);

  const onNodeClick = (event, node) => {
    const index = parseInt(node.id.split("-")[1], 10);
    setSelectedStep(roadmapData.steps[index]);
  };

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} onNodeClick={onNodeClick} fitView>
        <Background />
        <Controls />
      </ReactFlow>
      <Modal step={selectedStep} onClose={() => setSelectedStep(null)} />
    </div>
  );
}

export default App;
