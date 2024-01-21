import { motion } from "framer-motion"
import MapRight from "./MapRight";

const MapForm = (props) => {


    return (
        <div className = "map-form-container">
            <motion.div 
                className = "map-form" 
                whileHover = {{scale:0.98}}
            >
                <MapRight setActivePage = {(page) => props.setActivePage(page)}/>
            </motion.div>
            <div className="box-shadow-rounded" style={{background: "#3A7D44"}}>
            </div>
        </div>
    )


}
export default MapForm;