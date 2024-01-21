import MapForm from "./MapPageComponents/MapForm";
import MapPageLeft from "./MapPageComponents/MapPageLeft";

const MapPage = (props) => {
    return (
        <div className="map-page">
            <MapPageLeft/>
            <MapForm setActivePage = {(page) => props.setActivePage(page)}/>
        </div>
    )

}
export default MapPage;