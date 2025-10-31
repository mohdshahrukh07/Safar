import React from "react";

export default function ConfirmDialog({ show, title = "Confirmation", message, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75"
      style={{ zIndex: 2000 }}
    >
      <div
        className="bg-white rounded-4 shadow-lg p-4 position-relative animate__animated animate__fadeIn"
        style={{
          width: "90%",
          maxWidth: "600px",
          borderTop: "6px solid #ff5722",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={onCancel}
        ></button>

        {/* Title */}
        <h3 className="fw-bold text-center mb-3" style={{ color: "#ff5722" }}>
          {title}
        </h3>

        {/* Message */}
        <p className="text-center fs-5 text-secondary mb-4">{message}</p>

        {/* Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn text-white fw-semibold px-4 py-2 rounded-pill"
            style={{ backgroundColor: "#ff5722", minWidth: "120px" }}
            onClick={onConfirm}
          >
            Yes, Confirm
          </button>
          <button
            className="btn btn-outline-secondary fw-semibold px-4 py-2 rounded-pill"
            style={{ minWidth: "120px" }}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
