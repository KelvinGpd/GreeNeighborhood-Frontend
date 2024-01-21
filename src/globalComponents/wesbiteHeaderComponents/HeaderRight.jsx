import Constants from "../../data/constants";
import UserCircle from "./UserCircle";

const HeaderRight = ({user, logout}) => {

    return (
        <div className = "HeaderRight">
            {Constants.WELCOME}
            <UserCircle
                user = {user}
                logout = {logout}
            />
        </div>
    )

}
export default HeaderRight;