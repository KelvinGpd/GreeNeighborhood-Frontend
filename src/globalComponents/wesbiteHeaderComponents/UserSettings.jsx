import Constants from "../../data/constants"

const UserSettings = ({logout}) => {
    return (
        <div className = "user-settings">
            <div 
                className = "user-settings-single-setting"
                onClick = {logout}
            >
                {Constants.LOGOUT}
            </div>
        </div>
    )

}
export default UserSettings;