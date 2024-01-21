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

    function getColor(type, division){

        if(division["properties"]["NOM"] in apiData){
            if ("population" in apiData[division["properties"]["NOM"]]){
                var val = 255 * Number(apiData[division.properties["NOM"]]['population'])/100000
                return `rgb(${255-val}, ${255}, ${128})`
            }
            else {
                return "#000"
            }
        }
        else{
            return "#000"
        }

        
        
        var red = 255 * (val/100000)
        return `rgb(${red}, ${0}, ${0})`
    }

    return (
        <MapContainer center={[45.55, -73.7]} zoom={11}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {
                divisionData.features.map((division) => {
                const coordinates = division.geometry.coordinates[0][0].map((item) => [item[1], item[0]]);
                var color = "#fff"
                if(apiData != undefined){
                    color = getColor("population", division)
                    console.log(apiData)
                }
                return (<Polygon
                    pathOptions={{
                    fillColor: color,
                    fillOpacity: (color == "#000") ? 0 : 0.7,
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




export default Map;