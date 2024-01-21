import arrow from "../assets/arrow_forward.svg"
import { motion } from "framer-motion"


const Button = ({text, onClick}) => {
    return (
        <div className = "button-global-container">
            <motion.div 
                className="button-global"
                onClick = {onClick}
                whileHover = {{ scale : 1.02, x:10, y:-10 }}
            >
                <div className = "button-global-text">{text}</div>
                <img src = {arrow}/>
            </motion.div>
            <div className = "box-shadow" style={{background: "#3A7D44"}}/>
        </div>
    )

}
export default Button;