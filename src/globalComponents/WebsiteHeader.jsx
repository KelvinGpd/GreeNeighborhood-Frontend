import HeaderButton from "./wesbiteHeaderComponents/HeaderButton";
import HeaderRight from "./wesbiteHeaderComponents/HeaderRight";

const WebsiteHeader = ({currentActivePage, setCurrentActivePage, user, logout}) => {
    return (
        <div className="website-header">
            <HeaderButton
                currentActivePage = {currentActivePage}
                setCurrentActivePage = {setCurrentActivePage}
            />
            <HeaderRight
                user = {user}
                logout = {logout}
            />
        </div>
    )
}
export default WebsiteHeader;