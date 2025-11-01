import React from "react";

export default function Loader({ loading }) {
  if (!loading) return null; // Don't render when false

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-light bg-opacity-75"
      style={{ zIndex: 2000 }}
    >
      <div className="text-center">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem",borderColor: "#ff5722",borderRightColor: "transparent", }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3 fw-semibold">Loading...</p>
      </div>
    </div>
  );
}
