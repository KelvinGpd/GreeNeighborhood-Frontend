import MapForm from "./MapPageComponents/MapForm";
import MapPageLeft from "./MapPageComponents/MapPageLeft";

const MapPage = () => {
    return (
        <div className="map-page">
            <MapPageLeft/>
            <MapForm/>
        </div>
    )

}
export default MapPage;