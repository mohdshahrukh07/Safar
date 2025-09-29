import { useAuth } from "../Authentication/AuthContext"
import Linkstrip from "../Linkstrip/Linkstrip"
import useApi from "../../api/useApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BookingList from "./BookingLIst";
import History from "./Hostory";
import ProfileInfo from "./ProfileInfo";
export default function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const { logoutApi } = useApi();

    const [activeTab, setActiveTab] = useState("profile");

    const handleLogout = async () => {
        console.log(user.uuid);
        const response = await logoutApi({ uuid: user.uuid });
        if (response.status) {
            logout();
            navigate('/home');
        }
    }
    return (
        <>
            <Linkstrip Pagename="Dashboard" ComponentName="Profile" />

            <div className="">
                {/* Navigation */}
                <nav className="space-x-4">
                    <button
                        onClick={() => setActiveTab("profile")}
                        className={activeTab === "profile" ? "text-blue-600" : ""}
                    >
                        Profile
                    </button>
                    <button
                        onClick={() => setActiveTab("bookings")}
                        className={activeTab === "bookings" ? "text-blue-600" : ""}
                    >
                        bookings
                    </button>
                    <button
                        onClick={() => setActiveTab("history")}
                        className={activeTab === "history" ? "text-blue-600" : ""}
                    >
                        history
                    </button>
                </nav>

                {/* Content Rendering */}
                <div className="mt-4">
                    {activeTab === "profile" && <ProfileInfo />}
                    {activeTab === "bookings" && <BookingList />}
                    {activeTab === "history" && <History />}
                </div>
            </div>

            {/* <button onClick={handleLogout} >logout</button>
            <h1>hello world {user.username}</h1> */}
        </>
    )
}