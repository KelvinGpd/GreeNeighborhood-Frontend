import { motion } from "framer-motion"
import togglers from "../../data/togglers.json"
import Constants from "../../data/constants";

import treeIco from "../../assets/togglerIcons/treeData.svg"
import airIco from "../../assets/togglerIcons/airData.svg"
import carIco from "../../assets/togglerIcons/carData.svg"
import popIco from "../../assets/togglerIcons/populationData.svg"
import bikeIco from "../../assets/togglerIcons/bicycleData.svg"


const MapTogglers = ({setActiveDataType}) => {
    const icons = [treeIco, airIco, popIco, bikeIco, carIco];

    return (
        <div className = "map-togglers-container">
            <motion.div
                className = "map-togglers"
                whileHover = {{scale:0.98}}
            >
                <div className = "map-togglers-header">{Constants.CHOOSE_DATA_TYPE}</div>
                <div className = "map-togglers-list-container">
                {togglers.map((toggler, index) => {
                    const icon = icons[index];
                    return (
                    <motion.div
                        key={index} 
                        className="single-toggler-container"
                        onClick={() => setActiveDataType(toggler["for-data"])}
                        initial = {{opacity : 0.5}}
                        whileHover={{opacity : 1}}
                    >
                        <img src={icon} alt={`${toggler["display-name"]} Icon`} className="single-toggler-icon"/>
                        <div className="single-toggler-description">{toggler["display-name"].toUpperCase()}</div>
                    </motion.div>
                    );
                })}
                </div>


            </motion.div>
            <div className="box-shadow-rounded" style={{background: "#3A7D44"}} />
        </div>
    )
}
export default MapTogglers;