import { useState } from "react";
import UserSettings from "./UserSettings";

const UserCircle = ({user, logout}) => {
    const settingsToggled = useState(false);

    return (
        <div className = "user-circle" >
            {settingsToggled ? 
                <UserSettings
                    logout = {logout}
                />:
                null}
        </div>
    )

}
export default UserCircle;