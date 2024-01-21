import { motion } from "framer-motion"
import MapRight from "./MapRight";

const MapForm = () => {


    return (
        <div className = "map-form-container">
            <motion.div className = "map-form" >
                
            </motion.div>
            <div className="box-shadow-rounded" style={{background: "#3A7D44"}}>
                <MapRight />
            </div>
        </div>
    )


}
export default MapForm;