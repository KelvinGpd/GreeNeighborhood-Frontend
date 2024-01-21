import { useEffect, useState } from "react";
import Map from "./Map";
import MapTogglers from "./MapTogglers";

const MapPageLeft = () => {
    const [activeDataType, setActiveDataType] = useState("");

    useEffect (() => {console.log(activeDataType)},[activeDataType])

    return (
        <div className="map-page-left">
            <Map
                activeDataType = {activeDataType}
            />
            <MapTogglers
                setActiveDataType = {(dataType) => setActiveDataType (dataType)}  
            />
        </div>
    )
}
export default MapPageLeft;