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

    console.log(apiData)
    if(!type){
        type = "population"
    }

    if(type == "air"){
        var addingLol = 0
        var addingMax = 0


        //TODO DEBUG WHY TF
        if(division["properties"]["NOM"] in apiData){
        if(apiData[division["properties"]["NOM"]]["O3"] != undefined){
            addingLol += parseFloat(apiData[division["properties"]["NOM"]]["O3"])
            addingMax += parseFloat(maxVal['O3'])
        }

        if(apiData[division["properties"]["NOM"]]["SO2"] != undefined){
            addingLol += parseFloat(apiData[division["properties"]["NOM"]]["SO2"])
            addingMax += parseFloat(maxVal['SO2'])
        }
        if(apiData[division["properties"]["NOM"]]["NO2"] != undefined){
            addingLol += parseFloat(apiData[division["properties"]["NOM"]]["NO2"])
            addingMax += parseFloat(maxVal['N02'])
        }
        if(apiData[division["properties"]["NOM"]]["CO"] != undefined){
            addingLol += parseFloat(apiData[division["properties"]["NOM"]]["CO"])
            addingMax += parseFloat(maxVal['C0'])
        }
        if(apiData[division["properties"]["NOM"]]["PM"] != undefined){
            addingLol += parseFloat(apiData[division["properties"]["NOM"]]["PM"])
            addingMax += parseFloat(maxVal['PM'])
        }
        console.log(division["properties"]["NOM"])
        console.log(addingMax)
        console.log(addingLol)
        val = 255.0*(addingLol / addingMax)
        console.log(val)
        return (`rgb(${val}, ${255 - val}, 128)`)
    }
        else{
            return "#000"
        }

    }

    if(division["properties"]["NOM"] in apiData){
        if (type in apiData[division["properties"]["NOM"]]){
            console.log()
            var thisVal = parseFloat(apiData[division.properties["NOM"]][type]);
            var thisMaxVal = maxVal[type];
            var val = 255*(thisVal/ thisMaxVal)

            if(type == "cars"){
                return (`rgb(${val}, ${255-val}, ${128})`)
            }
            if(type == "trees"){
                return `rgb(${255-val}, ${val}, ${128})`
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
                    color = getColor(props.activeDataType, division, apiData, maxVal)
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