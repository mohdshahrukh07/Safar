import React, {useState} from "react";
import { useAuth } from "../Authentication/AuthContext";
import useApi from "../../api/useApi";
import { useNavigate } from "react-router-dom";
import Loader from "../Helpers/Loader";

export default function ProfileInfo({ user, logout }) {
  const {logoutApi} = useApi();
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    const handleLogout = async () => {
      setLoading(true)
    const response = await logoutApi({ uuid: user?.uuid });
    if (response.status) {
      logout();
      setLoading(false);
      navigate("/home");
    }
    setLoading(false);
  };
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div>
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-header bg-dark text-white text-center py-3">
              <h4 className="mb-0">Profile Information</h4>
            </div>

            <div className="card-body text-center">
              {/* User Avatar */}
              <div className="mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="User Avatar"
                  className="rounded-circle"
                  width="100"
                  height="100"
                />
              </div>

              {/* Name */}
              <h5 className="fw-bold text-capitalize mb-3">
                {user?.username || ""}
              </h5>

              {/* Info Grid */}
              <div className="row text-start">
                <div className="col-12 col-sm-6 mb-2">
                  <p className="mb-1 text-muted">First Name</p>
                  <p className="fw-semibold">{user?.firstName || "-----"}</p>
                </div>
                <div className="col-12 col-sm-6 mb-2">
                  <p className="mb-1 text-muted">Last Name</p>
                  <p className="fw-semibold">{user?.lastName || "-----"}</p>
                </div>
                <div className="col-12 col-sm-6 mb-2">
                  <p className="mb-1 text-muted">Email</p>
                  <p className="fw-semibold">{user?.email || "-----"}</p>
                </div>
                <div className="col-12 col-sm-6 mb-2">
                  <p className="mb-1 text-muted">Phone</p>
                  <p className="fw-semibold">{user?.phone || "-----"}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2 mt-4">
                <button
                  className="btn btn-secondary w-100 w-sm-auto"
                  disabled
                >
                  Edit Profile
                </button>
                <button
                  className="btn btn-danger w-100 w-sm-auto"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader loading={loading} />
    </div>
  );
}
