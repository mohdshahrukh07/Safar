import React, { useEffect, useState } from "react";
import useApi from "../../api/useApi";

export default function BookingList() {
  // Sample dynamic data
  // const bookings = [
  //   {
  //     id: 1,
  //     name: "Mountain Explorer",
  //     created: "05-05-2025",
  //     startDate: "10-05-2025",
  //     image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/adventure-1868817_1280.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Lakeside Retreat",
  //     created: "05-05-2025",
  //     startDate: "15-05-2025",
  //     image: "https://cdn.pixabay.com/photo/2016/10/13/09/06/lake-1739035_1280.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Forest Adventure",
  //     created: "06-05-2025",
  //     startDate: "20-05-2025",
  //     image: "https://cdn.pixabay.com/photo/2018/08/14/13/23/forest-3609014_1280.jpg",
  //   },
  // ];
  const [bookings, setBookings] = useState([]);
  const { BookingListApi } = useApi();

  useEffect(() => {
    try {
      const fetchData = async () => {

        const response = await BookingListApi();
        if (response.status) {
          console.log(response.data);
          setBookings(response.data);
        }
      }
      fetchData();
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

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
                  <h5 className="fw-bold mb-1">{booking.title}</h5>
                  <p className="mb-1 text-muted">
                    Created: <span className="fw-semibold">{booking.created_date}</span>
                  </p>
                  <p className="mb-0 text-muted">
                    Start Date: <span className="fw-semibold">{booking.start_date}</span>
                  </p>
                </div>

                {/* Buttons */}
                {console.log("booking.showCancelBtn",booking.showCancelBtn)
                }{console.log("booking?.inProgress && !booking?.showDeleteBtn",booking?.inProgress && !booking?.showDeleteBtn)}
                <div className="col-md-3 text-md-end text-center mt-3 mt-md-0">
                  {booking.showCancelBtn ? (
                    <>
                      <button className="btn btn-warning text-white fw-semibold me-2">
                        Edit
                      </button>
                      <button className="btn btn-danger fw-semibold">
                        Cancel
                      </button>
                    </>
                  ) : booking?.inProgress && !booking.showCancelBtn ? (
                    <button className="btn btn-success fw-semibold" disabled>
                      In Progress
                    </button>
                  ) : (
                    <button className="btn btn-danger fw-semibold" disabled>
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
          }
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
