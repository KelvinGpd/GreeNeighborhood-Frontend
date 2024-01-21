import Constants from "../../data/constants";
import Carousel from "../../globalComponents/Carousel";

const HomePageTop= () => {

    return (
        <div className="home-page-top">
            <div className = "home-page-top-website-name">{Constants.APPNAME.toUpperCase()}</div>
            <Carousel
            />
        </div>


    )

}
export default HomePageTop;