import React from "react";

export default function History() {
  // Sample dynamic data
  const bookings = [];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="card mb-4 border-0 shadow-sm rounded-3"
            >
              <div className="row g-0 align-items-center p-3">
                {/* Image */}
                <div className="col-md-3 text-center">
                  <img
                    src={booking.image}
                    alt={booking.name}
                    className="img-fluid rounded-3"
                    style={{ maxHeight: "120px", objectFit: "cover" }}
                  />
                </div>

                {/* Content */}
                <div className="col-md-6">
                  <h5 className="fw-bold mb-1">{booking.name}</h5>
                  <p className="mb-1 text-muted">
                    Created: <span className="fw-semibold">{booking.created}</span>
                  </p>
                  <p className="mb-0 text-muted">
                    Start Date: <span className="fw-semibold">{booking.startDate}</span>
                  </p>
                </div>

                {/* Buttons */}
                <div className="col-md-3 text-md-end text-center mt-3 mt-md-0">
                  <button className="btn btn-warning text-white fw-semibold me-2" disabled>
                    Edit
                  </button>
                  <button className="btn btn-success fw-semibold">
                    ✓
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* If no bookings */}
          {bookings.length === 0 && (
            <div className="text-center text-muted py-5">
              <h5>No history found</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
