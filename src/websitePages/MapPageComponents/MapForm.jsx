import { motion } from "framer-motion"

const MapForm = () => {


    return (
        <div className = "map-form-container">
            <motion.div 
                className = "map-form" 
                whileHover = {{scale:0.98}}
            >
            </motion.div>
            <div className="box-shadow-rounded" style={{background: "#3A7D44"}} />
        </div>
    )


}
export default MapForm;