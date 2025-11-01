import React from "react";

export default function BookPageSkeleton() {
  return (
    <div className="container my-4">
      {/* Skeleton for Image Slider */}
      <div className="placeholder-glow mb-4">
        <span className="placeholder col-12 d-block mb-2" style={{ height: "300px" }}></span>
      </div>

      {/* Skeleton for Tour Info Cards */}
      <div className="row g-3">
        {[1, 2, 3, 4].map((box) => (
          <div className="col-md-3" key={box}>
            <div className="placeholder-glow">
              <span className="placeholder col-12 d-block" style={{ height: "80px" }}></span>
            </div>
          </div>
        ))}
      </div>

      {/* Skeleton for Title & Price */}
      <div className="mt-4 placeholder-glow">
        <span className="placeholder col-6 d-block mb-2" style={{ height: "30px" }}></span>
        <span className="placeholder col-3 d-block" style={{ height: "25px" }}></span>
      </div>

      <div className="row mt-4">
        {/* Left Section: Overview & Description Skeleton */}
        <div className="col-md-8">
          <div className="placeholder-glow">
            <span className="placeholder col-8 d-block mb-3" style={{ height: "25px" }}></span>
            <span className="placeholder col-12 d-block mb-2" style={{ height: "15px" }}></span>
            <span className="placeholder col-11 d-block mb-2" style={{ height: "15px" }}></span>
            <span className="placeholder col-10 d-block mb-2" style={{ height: "15px" }}></span>
            <span className="placeholder col-8 d-block mb-2" style={{ height: "15px" }}></span>
          </div>

          {/* Amenities Skeleton */}
          <div className="row mt-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div className="col-6 col-md-4 mb-2" key={item}>
                <div className="placeholder-glow">
                  <span className="placeholder col-12 d-block" style={{ height: "20px" }}></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Booking Form Skeleton */}
        <div className="col-md-4">
          <div className="border rounded p-3">
            <div className="placeholder-glow">
              <span className="placeholder col-6 d-block mb-3" style={{ height: "20px" }}></span>

              {/* Address Input */}
              <span className="placeholder col-12 d-block mb-3" style={{ height: "35px" }}></span>

              {/* Date Input */}
              <span className="placeholder col-12 d-block mb-3" style={{ height: "35px" }}></span>

              {/* Ticket Selects */}
              {[1, 2, 3].map((select) => (
                <span
                  className="placeholder col-12 d-block mb-3"
                  style={{ height: "35px" }}
                  key={select}
                ></span>
              ))}

              {/* Total */}
              <span className="placeholder col-4 d-block mb-3" style={{ height: "25px" }}></span>

              {/* Button */}
              <span
                className="placeholder col-12 d-block"
                style={{ height: "40px", borderRadius: "6px" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
