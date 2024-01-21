import Constants from "../../data/constants";
import facts from "../../data/facts.json"
import FactContainer from "../../globalComponents/FactContainer";

const HomePageMiddle = ({}) => {
    return (
        <div className="home-page-middle">
            <div className = "home-page-middle-title">{Constants.DIDYOUKNOW.toUpperCase()}</div>
            <div className = "home-page-middle-cards-container">
                {facts.map((fact) => {
                    return (
                        <FactContainer
                            fact = {fact}
                        />
                    )
                })}
            </div>
            <div>
                <img src="../../assets/car.svg"/>
            </div>

        </div>
    )

}
export default HomePageMiddle;