import { motion } from "framer-motion"
import HomePage from "../../websitePages/HomePage";
import arrow from "../../assets/arrow_forward.svg"
import Constants from "../../data/constants";
import MapPage from "../../websitePages/MapPage";


const HeaderButton = ({currentActivePage, setCurrentActivePage}) => {
    const isHomePage = currentActivePage && currentActivePage.type === HomePage;
    return (
        !isHomePage ? 
        <motion.div 
            className = "header-button"
            style={{paddingRight: "4%"}}
            onClick = {() => setCurrentActivePage(
                <HomePage
                    setActivePage = {setCurrentActivePage}
                />
            )}
            whileHover = {{x:20}}
        >
            <img src={arrow} style = {{transform: "scaleX(-1)"}} width = "40%"/>
            <div className = "header-button-text">{Constants.HOME}</div>
        </motion.div> : 
        <motion.div 
            className = "header-button"
            style={{paddingLeft: "4%"}}
            onClick = {() => setCurrentActivePage(<MapPage setActivePage = {setCurrentActivePage}/>)}
            whileHover = {{x:20}}
        >
            <div className = "header-button-text">{Constants.MAP}</div>
            <img src={arrow} width = "40%"/>
        </motion.div>
    )
}
export default HeaderButton;