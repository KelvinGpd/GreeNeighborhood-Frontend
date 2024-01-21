import HeaderButton from "./wesbiteHeaderComponents/HeaderButton";
import HeaderRight from "./wesbiteHeaderComponents/HeaderRight";

const WebsiteHeader = ({currentActivePage, setCurrentActivePage, user}) => {
    return (
        <div className="website-header">
            <HeaderButton
                currentActivePage = {currentActivePage}
                setCurrentActivePage = {setCurrentActivePage}
            />
            <HeaderRight
                user = {user}
            />
        </div>
    )
}
export default WebsiteHeader;