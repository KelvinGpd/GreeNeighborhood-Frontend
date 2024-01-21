import Constants from "../../data/constants";
import facts from "../../data/facts.json"
import InfoCard from "../../globalComponents/InfoCard";

const HomePageMiddle = ({}) => {
    return (
        <div className="home-page-middle">
            <div className = "home-page-middle-title">{Constants.DIDYOUKNOW.toUpperCase()}</div>
            <div className = "home-page-middle-cards-container">
                {facts.map((fact) => {
                    return (
                        <InfoCard
                            fact = {fact}
                        />
                    )
                })}
            </div>
        </div>
    )

}
export default HomePageMiddle;