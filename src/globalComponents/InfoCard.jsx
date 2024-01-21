const InfoCard = ({fact}) => {
    return (
        <div className = "infocard">
            <div className = "infocard-header">{fact.header}</div>
            <div className = "infocard-description">{fact.description}</div>
        </div>
    )


}
export default InfoCard;