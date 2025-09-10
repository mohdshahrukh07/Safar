import React from "react";

export default function TourSkeleton() {
    const skeletons = Array(6).fill(0); // 6 cards bana rahe hain

    return (
        <>
            {skeletons.map((_, i) => (
                <div className="card-container card mb-3" key={i}>
                    {/* Image skeleton */}
                    <div
                        className="inner-image card-img-top placeholder-glow"
                        style={{ height: "200px", background: "#e9ecef" }}
                    >
                        <span className="w-100 h-100 placeholder col-12"></span>
                    </div>

                    {/* Card details */}
                    <div className="card-detail p-3">
                        <div className="inner-detail">
                            {/* Offer */}
                            <div className="card-offer placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </div>

                            {/* Title + stars */}
                            <div className="card-box">
                                <div className="tour-title">
                                    <div className="tour-stars mb-2">
                                        {[...Array(5)].map((_, idx) => (
                                            <i className="fa-solid fa-star text-muted" key={idx}></i>
                                        ))}
                                    </div>
                                    <h3 className="card-title placeholder-glow">
                                        <span className="placeholder col-8"></span>
                                    </h3>
                                    <div className="tour-address placeholder-glow">
                                        <span className="placeholder col-5"></span>
                                    </div>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="tour-rate mt-3">
                                <span className="tour-old-price placeholder-glow d-block mb-1">
                                    <span className="placeholder col-4"></span>
                                </span>
                                <span className="tour-current-price placeholder-glow">
                                    <span className="placeholder col-6"></span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
