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



const Map = (props) => {
    const [apiData, setApiData] = useState()
    const [maxVal, setMaxVal] = useState()

    useEffect(() => {
        const data = getData(setApiData);
        
    }, [])

    function getColor(type, division){

        if(division["properties"]["NOM"] in apiData){
            if ("population" in apiData[division["properties"]["NOM"]]){
                var val = 255 * Number(apiData[division.properties["NOM"]]['population'])
                if(type == "population"){
                    return (`rgb(${255}, ${255}, ${val})`)
                }
                else if(type == "cars"){
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

    function getMax(){
        var max = 0;

        if(props.activeDataType == "air"){
            const keys = ["CO", "NO2", "O3", "PM", "SO2"]
            for (const [_, vals] of Object.entries(apiData)){
                var n = 0
                var sum = 0
                for(const key of keys){
                    if (vals.key != undefined){
                        sum += Number(vals.key)
                        n+=1;
                    }
                }
                if(max > sum/n){
                    max = sum/n
                }
            }
        }
        else{
            var type = props.activeDataType
            for (const [_, vals] of Object.entries(apiData)){
                if(vals.type != undefined && Number(vals.type) > max){
                    max = Number(vals.type)
                }
            }
        }
        return max
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
                    setMaxVal(getMax)
                    console.log(maxVal)
                    color = getColor(props.toggle, division)
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