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


 function getColor(type, division, apiData, maxVal){

    if(!type){
        type = "population"
    }

    if(division["properties"]["NOM"] in apiData){
        if ("population" in apiData[division["properties"]["NOM"]]){
            
            var thisVal = parseFloat(apiData[division.properties["NOM"]]['population']);
            var thisMaxVal = maxVal[type];
            var val = 255*(thisVal/ thisMaxVal)

            if(type == "cars"){
                return (`rgb(${val}, ${255-val}, ${128})`)
            }
            else{
                return (`rgb(${255-val}, ${val}, ${128})`)
            }
        }
        else {
            return "#000"
        }
    }
    else{
        return "#000"
    }
 }


 function getMax(apiData){

    var maximum = {}

    for (const [_, vals] of Object.entries(apiData)){

        for (const [key, value] of Object.entries(vals)) {
            if(key in maximum){
                if(value > maximum[key]){
                    maximum[key] = value
                }
            }
            else{
                maximum[key] = value
            }
        }
    }

    return maximum
}

const Map = (props) => {
    const [apiData, setApiData] = useState({})
    const [maxVal, setMaxVal] = useState()

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
                var color = "#fff"
                var maxVal;

                if(apiData != undefined){
                    maxVal = getMax(apiData)
                    color = getColor(props.toggle, division, apiData, maxVal)
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