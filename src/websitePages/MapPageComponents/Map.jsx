import 'leaflet/dist/leaflet.css'
import { divisionData } from "../../data/divisionsMtl"

import { MapContainer, TileLayer, Polygon } from "react-leaflet"

const Map = () => {
    return (
        <MapContainer center={[45.55, -73.7]} zoom={11}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {
                divisionData.features.map((division) => {
                const coordinates = division.geometry.coordinates[0][0].map((item) => [item[1], item[0]]);
                const data = getData();
                console.log(data);

                return (<Polygon
                    pathOptions={{
                    fillColor: "#FD8D3C",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3, 
                    color: 'white'
                    }}
                    positions={coordinates}
                />)
                })
            }
        </MapContainer>
    )
}

function getData() {
   fetch('https://greeneighborhood-ca0076fde18e.herokuapp.com/get_data', {
   headers: {
      'Accept': 'application/json'
   }
   })
   .then(response => response.text())
   .then(text => return(text))
}

export default Map;