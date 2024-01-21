import Constants from "../../data/constants";
import Button from "../../globalComponents/Button";
import MapPage from "../MapPage";

const HomePageBottom = ({setActivePage}) => {
    return (
        <div className="home-page-bottom">
            <div className = "home-page-bottom-title">{Constants.SOURCE}</div>
            <div className = "home-page-bottom-padded">
                <div className = "home-page-bottom-description">{Constants.SOURCE_DESCRIPTION}</div>
                <Button
                    text = {Constants.HOMEPAGE_BUTTON}
                    onClick = {() => setActivePage(<MapPage/>)}
                />
            </div>
        </div>
    )

}
export default HomePageBottom;