import Map from "./Map";
import MapTogglers from "./MapTogglers";

const MapPageLeft = () => {
    return (
        <div className="map-page-left">
            <Map/>
            <MapTogglers/>
        </div>
    )
}
export default MapPageLeft;