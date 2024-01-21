const InfoCard = ({fact}) => {
    return (
        <div className = "infocard-container">
            <div className = "infocard">
                <div className = "infocard-header">{fact.header}</div>
                <div className = "infocard-description">{fact.description}</div>
            </div>
            <div className = "box-shadow" style = {{background : "#8F435A"}}></div>
        </div>
    )


}
export default InfoCard;