import { motion } from "framer-motion"

const MapTogglers = () => {
    return (
        <div className = "map-togglers-container">
                <motion.div
                    className = "map-togglers"
                >
                </motion.div>
            <div className="box-shadow-rounded" style={{background: "#3A7D44"}} />
        </div>
    )
}
export default MapTogglers;