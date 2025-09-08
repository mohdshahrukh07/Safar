import { useAuth } from "../Authentication/AuthContext"
import Linkstrip from "../Linkstrip/Linkstrip"
export default function Profile() {
    const { user } = useAuth();

    return (
        <>
            <Linkstrip Pagename="My Account" ComponentName="Profile" />
            <h1>hello world {user.username}</h1>
        </>
    )
}