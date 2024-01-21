import HomePageBottom from "./HomePageComponents/HomePageBottom";
import HomePageMiddle from "./HomePageComponents/HomePageMiddle";
import HomePageTop from "./HomePageComponents/HomePageTop";

const HomePage = ({setActivePage}) => {
    return (
        <div className="home-page">
            <HomePageTop/>
            <HomePageMiddle/>
            <HomePageBottom
                setActivePage = {setActivePage}
            />
        </div>
    )

}
export default HomePage;