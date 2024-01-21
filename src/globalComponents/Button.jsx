const Button = ({text, onClick}) => {
    return (
        <div 
            className="button-global"
            onClick = {onClick}
        >
            <div className = "button-global-text">{text}</div>
            <img src="../assets/arrow-forward.svg"/>
        </div>
    )

}
export default Button;