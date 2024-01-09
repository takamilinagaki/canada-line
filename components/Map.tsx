
import { MapContainer, TileLayer, Popup, Polyline, CircleMarker } from "react-leaflet";
import 'leaflet/dist/leaflet.css';



const colourOption = {color: '#009BC9'};

const canadaLine: [number, number][] [] = [
    [
        [49.285833, -123.111667], //waterfront
        [49.28202, -123.11875], //vancouver city center
        [49.27455, -123.1219], //yaletown
        [49.266389, -123.115833], //olympic village
        [49.262778, -123.114444], //broadway
        [49.249167, -123.115833], //king edward
        [49.233056, -123.116667], //okridge
        [49.226389, -123.116111], //langara
        [49.209722, -123.116944], //marine drive
        [49.195556, -123.126111], //bridgeport
        [49.183889, -123.136389], //aberdeen
        [49.174722, -123.136389], //lansdowne
        [49.168056, -123.136389], //richmond–Brighouse
    ],
    [
        [49.195556, -123.126111], //bridgeport
        [49.196667, -123.146389], //templeton
        [49.193056, -123.158056], //sea Island Centre
        [49.194167, -123.178333], //yvr airport
    ]
]


        const Map = () => {
            return(
                <MapContainer
                    style={{height: '91.5vh'}}
                    center={[49.195556, -123.122111]} zoom={12} scrollWheelZoom={true}>
                
                        <TileLayer 
                                    attribution='&copy; <a href="https://github.com/takamilinagaki/canada-line">By Takami Inagaki</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                
                        <Polyline pathOptions={colourOption} positions={canadaLine}/>


                                <CircleMarker center={[49.285833, -123.111667]} pathOptions={colourOption} radius={7}>
                                    <Popup>Waterfront Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.28202, -123.11875]} pathOptions={colourOption} radius={7}>
                                    <Popup>Vancouver City Center Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.27455, -123.1219]} pathOptions={colourOption} radius={7}>
                                    <Popup>Yaletown Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.266389, -123.115833]} pathOptions={colourOption} radius={7}>
                                    <Popup>Olympic Village Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.262778, -123.114444]} pathOptions={colourOption} radius={7}>
                                    <Popup>Broadway Station</Popup>
                                </CircleMarker>

                                <CircleMarker center={[49.249167, -123.115833]} pathOptions={colourOption} radius={7}>
                                    <Popup>King Edward Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.233056, -123.116667]} pathOptions={colourOption} radius={7}>
                                    <Popup>Oakridge-41st Avenue Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.226389, -123.116111]} pathOptions={colourOption} radius={7}>
                                    <Popup>Langara-49th Avenue Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.209722, -123.116944]} pathOptions={colourOption} radius={7}>
                                    <Popup>Marine Drive Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.195556, -123.126111]} pathOptions={colourOption} radius={7}>
                                    <Popup>Bridgeport Station</Popup>
                                </CircleMarker>



                                <CircleMarker center={[49.183889, -123.136389]} pathOptions={colourOption} radius={7}>
                                    <Popup>Aberdeen Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.174722, -123.136389]} pathOptions={colourOption} radius={7}>
                                    <Popup>Lansdowne Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.168056, -123.136389]} pathOptions={colourOption} radius={7}>
                                    <Popup>Richmond-Brighouse Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.196667, -123.146389]} pathOptions={colourOption} radius={7}>
                                    <Popup>Templeton Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.193056, -123.158056]} pathOptions={colourOption} radius={7}>
                                    <Popup>Sea Island Centre Station</Popup>
                                </CircleMarker>


                                <CircleMarker center={[49.194167, -123.178333]} pathOptions={colourOption} radius={7}>
                                    <Popup>YVR-Airport Station</Popup>
                                </CircleMarker>

                </MapContainer>
            )
        }

                            export default Map;

