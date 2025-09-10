import { useAuth } from "../Authentication/AuthContext"
import Linkstrip from "../Linkstrip/Linkstrip"
import useApi from "../../api/useApi";
import { useNavigate } from "react-router-dom";
export default function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const {logoutApi} = useApi();
    const handleLogout = async () =>{
        console.log(user.uuid);
        const response = await logoutApi({uuid:user.uuid});
        if(response.status){
            logout();
            navigate('/home');
        }
    }
    return (
        <>
            <Linkstrip Pagename="My Account" ComponentName="Profile" />
            <button onClick={handleLogout} >logout</button>
            <h1>hello world {user.username}</h1>
        </>
    )
}