import React from "react";

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#fff",
  padding: "1.5rem",
  borderRadius: "8px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  zIndex: 1000,
  maxWidth: "500px",
  width: "90%",
};

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: 999,
};

function Modal({ step, onClose }) {
  if (!step) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        <h2>{step.title}</h2>
        <p>{step.description}</p>
        <ul>
          {step.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default Modal;
