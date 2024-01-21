const Button = ({text, onClick}) => {
    return (
        <div 
            className="button-global"
            onClick = {onClick}
        >
            {text}
            <img src="../assets/arrow-forward.svg"/>
        </div>
    )

}
export default Button;