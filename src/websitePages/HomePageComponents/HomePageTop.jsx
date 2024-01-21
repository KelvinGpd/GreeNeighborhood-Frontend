import Constants from "../../data/constants";
import Carousel from "../../globalComponents/Carousel";

const HomePageTop= () => {

    return (
        <div className="home-page-top">
            <div>{Constants.APPNAME}</div>
            <Carousel
            />
        </div>


    )

}
export default HomePageTop;