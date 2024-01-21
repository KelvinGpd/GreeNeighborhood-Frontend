const FactContainer = ({fact}) => {
    return (
        <div className = "fact-container">
            <div className = "fact-container-header">{fact.header}</div>
            <div className = "fact-container-description">{fact.description}</div>
        </div>
    )


}
export default FactContainer;