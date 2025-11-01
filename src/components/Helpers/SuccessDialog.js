import React from "react";

export default function SuccessDialog({ symbol = true,show, title = "Success", message, onClose }) {
  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
      style={{ zIndex: 2100 }}
    >
      <div
        className="bg-white rounded-4 shadow-lg p-5 position-relative text-center animate__animated animate__fadeInDown"
        style={{
          width: "90%",
          maxWidth: "500px",
          borderTop: "6px solid #ff5722",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={onClose}
        ></button>

        {/* Success Icon */}
       {symbol && <div
          className="d-flex justify-content-center align-items-center mx-auto mb-4 rounded-circle"
          style={{
            backgroundColor: "#e8f5e9",
            width: "90px",
            height: "90px",
          }}
        >
          <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="#4caf50"
    className="bi bi-check-circle-fill"
    viewBox="0 0 16 16"
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 10.97l4.243-4.242a.75.75 0 1 0-1.06-1.06L6.5 8.939 5.354 7.793a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" />
  </svg>
        </div>}

        {/* Title */}
        <h3 className="fw-bold mb-3" style={{ color: "#ff5722" }}>
          {title}
        </h3>

        {/* Message */}
        <p className="fs-5 text-secondary mb-4">{message}</p>

        {/* Close Button */}
        <button
          className="btn text-white fw-semibold px-4 py-2 rounded-pill"
          style={{ backgroundColor: "#ff5722" }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
