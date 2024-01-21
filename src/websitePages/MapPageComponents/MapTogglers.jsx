import { motion } from "framer-motion"
import togglers from "../../data/togglers.json"
import { useState } from "react"
import Constants from "../../data/constants";

import trees from "../../assets/togglerIcons/treeData.svg"

// {
//     "for-data" : "trees",
//     "display-name" : "tree density"
// },
// {
//     "for-data" : "air",
//     "display-name" : "tree density"
// },
// {
//     "for-data" : "population",
//     "display-name" : "tree density"
// },
// {
//     "for-data" : "bikes",
//     "display-name" : "tree density"
// },
// {
//     "for-data" : "cars",
//     "display-name" : "tree density"
// }
const MapTogglers = ({setActiveDataType}) => {

    return (
        <div className = "map-togglers-container">
            <motion.div
                className = "map-togglers"
            >
                <div className = "map-togglers-header">{Constants.CHOOSE_DATA_TYPE}</div>
                <div className = "map-togglers-list-container">
                    {togglers.map((toggler) => {
                        return(
                            <div 
                                className = "single-toggler-container"
                                onClick = {() => setActiveDataType(toggler["for-data"])}
                            >
                                <img src = {toggler["for-data"]} className= "single-togler-icon" width ="100%"/>
                                <div className = "single-togler-description">{toggler["display-name"]}</div>
                            </div>
                        )
                    })}
                </div>


            </motion.div>
            <div className="box-shadow-rounded" style={{background: "#3A7D44"}} />
        </div>
    )
}
export default MapTogglers;