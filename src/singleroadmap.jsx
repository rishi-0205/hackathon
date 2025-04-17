import React, { useState, useEffect } from "react";

// A very simple roadmap component with no dependencies
const SimpleRoadmap = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Update window width on resize
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = windowWidth < 768;

  // Roadmap data
  const roadmapData = {
    title: "Frontend Development",
    steps: [
      {
        title: "HTML",
        description:
          "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure of web content.",
        links: [
          {
            title: "MDN Web Docs - HTML Basics",
            url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics",
          },
          {
            title: "W3Schools HTML Tutorial",
            url: "https://www.w3schools.com/html/",
          },
        ],
      },
      {
        title: "CSS",
        description:
          "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
        links: [
          {
            title: "MDN Web Docs - CSS Basics",
            url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
          },
          { title: "CSS Tricks", url: "https://css-tricks.com/" },
        ],
      },
      {
        title: "JavaScript",
        description:
          "JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.",
        links: [
          {
            title: "MDN Web Docs - JavaScript Guide",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
          },
          { title: "JavaScript.info", url: "https://javascript.info/" },
        ],
      },
    ],
  };

  // Open the modal with a specific step
  const openModal = (step) => {
    setSelectedStep(step);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Web Development Learning Path
      </h1>

      <h2
        style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        {roadmapData.title}
      </h2>

      <div style={{ position: "relative" }}>
        {/* Vertical timeline */}
        <div
          style={{
            position: "absolute",
            left: isMobile ? "20px" : "50%",
            width: "2px",
            backgroundColor: "#e0e0e0",
            top: 0,
            bottom: 0,
            transform: isMobile ? "none" : "translateX(-1px)",
          }}
        ></div>

        {/* Steps */}
        {roadmapData.steps.map((step, index) => {
          const isEven = index % 2 === 0;

          // Mobile layout (vertical list)
          if (isMobile) {
            return (
              <div
                key={index}
                style={{
                  marginBottom: "2rem",
                  paddingLeft: "40px",
                  position: "relative",
                }}
              >
                {/* Circle marker */}
                <div
                  style={{
                    position: "absolute",
                    left: "15px",
                    top: "15px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#3b82f6",
                    transform: "translateX(-50%)",
                  }}
                ></div>

                {/* Step card */}
                <div
                  onClick={() => openModal(step)}
                  style={{
                    backgroundColor: "white",
                    padding: "15px",
                    borderRadius: "8px",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "#3b82f6",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {step.title}
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          }

          // Desktop layout (zigzag)
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "3rem",
                position: "relative",
              }}
            >
              {/* Circle in the middle */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "24px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: "#3b82f6",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                }}
              ></div>

              {/* Left side (even steps) */}
              <div
                style={{
                  width: "50%",
                  paddingRight: "20px",
                  visibility: isEven ? "visible" : "hidden",
                }}
              >
                <div
                  onClick={() => openModal(step)}
                  style={{
                    backgroundColor: "white",
                    padding: "15px",
                    borderRadius: "8px",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    cursor: "pointer",
                    marginLeft: "auto",
                    maxWidth: "300px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "#3b82f6",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {step.title}
                    <span>→</span>
                  </div>
                </div>
              </div>

              {/* Right side (odd steps) */}
              <div
                style={{
                  width: "50%",
                  paddingLeft: "20px",
                  visibility: !isEven ? "visible" : "hidden",
                }}
              >
                <div
                  onClick={() => openModal(step)}
                  style={{
                    backgroundColor: "white",
                    padding: "15px",
                    borderRadius: "8px",
                    boxShadow:
                      "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    cursor: "pointer",
                    maxWidth: "300px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: "600",
                      color: "#3b82f6",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {step.title}
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Finish marker */}
        <div
          style={{
            textAlign: isMobile ? "left" : "center",
            paddingLeft: isMobile ? "40px" : 0,
            position: "relative",
            marginTop: "1rem",
          }}
        >
          {isMobile ? (
            <div
              style={{
                position: "absolute",
                left: "15px",
                top: "15px",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                transform: "translateX(-50%)",
              }}
            ></div>
          ) : (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                transform: "translate(-50%, -50%)",
                zIndex: 2,
              }}
            ></div>
          )}

          <div
            style={{
              display: "inline-block",
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "8px",
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              marginTop: isMobile ? 0 : "16px",
            }}
          >
            <p style={{ margin: 0, fontWeight: "500", color: "green" }}>
              Ready to build amazing web applications!
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedStep && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "100%",
              padding: "20px",
              maxHeight: "80vh",
              overflow: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "15px",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {selectedStep.title}
              </h3>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  padding: "0 5px",
                }}
              >
                ×
              </button>
            </div>

            <p style={{ marginBottom: "20px" }}>{selectedStep.description}</p>

            {selectedStep.links && selectedStep.links.length > 0 && (
              <div>
                <h4
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Resources:
                </h4>
                <ul style={{ paddingLeft: "20px" }}>
                  {selectedStep.links.map((link, i) => (
                    <li key={i} style={{ marginBottom: "5px" }}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#3b82f6", textDecoration: "none" }}
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
      )}
    </div>
  );
};

export default SimpleRoadmap;
