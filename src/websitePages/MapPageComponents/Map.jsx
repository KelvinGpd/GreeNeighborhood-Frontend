import 'leaflet/dist/leaflet.css'
import { divisionData } from "../../data/divisionsMtl"

import { MapContainer, TileLayer, Polygon } from "react-leaflet"
import { useEffect, useState } from 'react'
import axios from 'axios';

function getData(setApiData) {

    axios.get("https://greeneighborhood-ca0076fde18e.herokuapp.com/get_data")
    .then((response) => setApiData(response.data))
    .catch((error) => console.log(error));
 
    return 0
 }

const Map = () => {
    const [apiData, setApiData] = useState()

    useEffect(() => {
        const data = getData(setApiData);
        
    }, [])

    return (
        <MapContainer center={[45.55, -73.7]} zoom={11}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {
                divisionData.features.map((division) => {
                const coordinates = division.geometry.coordinates[0][0].map((item) => [item[1], item[0]]);
                
                return (<Polygon
                    pathOptions={{
                    fillColor: "#FF0000",
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

function getColor(type, val){
    if (val == null){
        return `rgb(${0}, ${0}, ${0})`
    }
    var red = 255 * (val/100000)
    return `rgb(${red}, ${0}, ${0})`
}


export default Map;