import Map from "./MapPageComponents/Map";
import MapPageRight from "./MapPageComponents/MapPageRight"



const MapPage = () => {
    return (
        <div className="map-page">
            <div className="map-page-left">
                <Map />
            </div>
            <div className="map-page-right">
                <MapPageRight />
            </div>
        </div>
    )

}
export default MapPage;