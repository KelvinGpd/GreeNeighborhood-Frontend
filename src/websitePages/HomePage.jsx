import HomePageBottom from "./HomePageComponents/HomePageBottom";
import HomePageMiddle from "./HomePageComponents/HomePageMiddle";
import HomePageTop from "./HomePageComponents/HomePageTop";
import carSvg from "../assets/car.svg"

const HomePage = ({setActivePage}) => {
    return (
        <div className="home-page">
            <HomePageTop/>
            <HomePageMiddle/>
            <div className = "home-page-illustration">
                <img src = {carSvg}/>
            </div>
            <HomePageBottom
                setActivePage = {setActivePage}
            />
        </div>
    )

}
export default HomePage;