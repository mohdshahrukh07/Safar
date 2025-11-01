import { useAuth } from "../Authentication/AuthContext";
import Linkstrip from "../Linkstrip/Linkstrip";
import useApi from "../../api/useApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BookingList from "./BookingLIst";
import History from "./History";
import ProfileInfo from "./ProfileInfo";
import "./Profile.css"; // ✅ Import external CSS

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { logoutApi } = useApi();

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <Linkstrip Pagename="Dashboard" ComponentName="Profile" />

      <div className="container mt-5" style={{ maxWidth: "1200px" }}>
        {/* Tabs Navigation */}
        <div className="profile-tabs">
          {[
            { key: "profile", label: "Profile" },
            { key: "bookings", label: "Bookings" },
            { key: "history", label: "History" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`btn fw-semibold text-capitalize ${
                activeTab === tab.key
                  ? "btnOrange text-white shadow"
                  : "btn-dark text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeTab === "profile" && <ProfileInfo user={user} logout={logout} />}
          {activeTab === "bookings" && <BookingList />}
          {activeTab === "history" && <History />}
        </div>
      </div>
    </>
  );
}
