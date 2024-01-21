import { useEffect } from "react";
import Constants from "../../data/constants";
import { getAuth } from "firebase/auth";

const HeaderRight = ({user}) => {
    
    let username = user ? user.email : ""
    useEffect(() => {
        username = user ? user.email : ""
    },[user])

    const logout = () => {
        let auth = getAuth()
        auth.signOut();
        window.location.reload();
    }

    return (
        <div className = "header-right">
            {Constants.WELCOME + username}
            <div 
                className = "header-logout"
                onClick = {logout}
            >
                {Constants.LOGOUT}
            </div>
        </div>
    )

}
export default HeaderRight;