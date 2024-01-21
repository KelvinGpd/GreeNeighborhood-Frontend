import Constants from "../../data/constants";
import facts from "../../data/facts.json"
import FactContainer from "../../globalComponents/FactContainer";

const HomePageMiddle = ({}) => {
    return (
        <div className="home-page-middle">
            <div>{Constants.DIDYOUKNOW}</div>
            {facts.map((fact) => {
                return (
                    <FactContainer
                        fact = {fact}
                    />
                )
            })}
            <div>
                <img src="../../assets/car.svg"/>
            </div>

        </div>
    )

}
export default HomePageMiddle;