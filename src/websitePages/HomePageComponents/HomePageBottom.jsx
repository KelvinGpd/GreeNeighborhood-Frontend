import Constants from "../../data/constants";
import Button from "../../globalComponents/Button";
import MapPage from "../MapPage";

const HomePageBottom = ({setActivePage}) => {
    return (
        <div className="home-page-bottom">
            <div>{Constants.SOURCE}</div>
            <div>{Constants.SOURCE_DESCRIPTION}</div>
            <Button
                text = {Constants.HOMEPAGE_BUTTON}
                onClick = {() => setActivePage(<MapPage/>)}
            />
        </div>
    )

}
export default HomePageBottom;