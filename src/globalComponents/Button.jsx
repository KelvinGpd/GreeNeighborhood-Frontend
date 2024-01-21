import arrow from "../assets/arrow_forward.svg"

const Button = ({text, onClick}) => {
    return (
        <div className = "button-global-container">
            <div 
                className="button-global"
                onClick = {onClick}
            >
                <div className = "button-global-text">{text}</div>
                <img src = {arrow}/>
            </div>
            <div className = "box-shadow" style={{background: "#3A7D44"}}/>
        </div>
    )

}
export default Button;