import { MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({iconUrl: "/images/skytrain-icon.png"})

const polyline: [number, number][] = [
    [49.25299,-123.00600],
    [49.25980,-123.01400],
    [49.25299,-123.04400],
    
]

const multiPolyline: [number, number][][] = [
    [
        [49.28619,-123.11220],//waterfront
        [49.28205,-123.11899],//vancouver City Center
        [49.27455,-123.12190],//Yaletown-Roundhouse
        [49.26659,-123.11570],//Olympic Village
        [49.26285,-123.11450],//Broadway-CityHall
        [49.24915,-123.11580],//King Edward
        [49.23315,-123.11660],//Oakridge-41st Avenue
        [49.22625,-123.11610],//Langara-49th Avenue
        [49.20965,-123.11700],//Marine Drive
        [49.20000,-123.11805],//turnpoint
        [49.19755,-123.12105],//turnpoint
        [49.19565,-123.12590],//Bridgeport
        [49.19370,-123.12970],//turnpoint
        [49.19080,-123.13020],//turnpoint
        [49.18470,-123.13620],//turnpoint
        [49.18400,-123.13630],//Aberdeen
        [49.17455,-123.13645],//Lansdowne
        [49.16810,-123.13625],//Richmond-Brighouse
    ],
    [
        [49.19565,-123.12590],//Bridgeport
        [49.19450,-123.12850],//turnpoint
        [49.19435,-123.12950],//turnpoint
        [49.19435,-123.12990],//turnpoint
        [49.19435,-123.13010],//turnpoint
        [49.19525,-123.13250],//turnpoint
        [49.19550,-123.13350],//turnpoint
        [49.19685,-123.14500],//turnpoint
        [49.19670,-123.14650],//Templeton
        [49.19635,-123.14840],//turnpoint
        [49.19325,-123.15440],//turnpoint
        [49.19300,-123.15800],//Sea Island Center
        [49.19300,-123.16650],//turnpoint
        [49.19360,-123.17150],//turnpoint
        [49.19360,-123.17350],//turnpoint
        [49.19420,-123.17830],//YVR-Airport

        
    ]
    
]

const blueOption = {color: 'blue'}
const redOption = {color: 'red'}
const fillBlueOption = {color: 'blue'}

const center:[number, number] = [49.25299,-123.00600]


const Map = () => {
    return(
        <MapContainer
            style={{height: "100vh"}}
            center={[49.24915,-123.11580]}
            zoom={12}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/JustinMa96/canada-line.git">By Justin Ma</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            
            />

            <Marker position={[49.28619,-123.11220]} icon={icon}>
                <Popup>
                    WaterFront
                </Popup>
            </Marker>

            <Marker position={[49.28205,-123.11899]} icon={icon}>
                <Popup>
                    vancouver City Center
                </Popup>
            </Marker>

            <Marker position={[49.27455,-123.12190]} icon={icon}>
                <Popup>
                    Yaletown-Roundhouse
                </Popup>
            </Marker>

            <Marker position={[49.26659,-123.11570]} icon={icon}>
                <Popup>
                    Olympic Village
                </Popup>
            </Marker>

            <Marker position={[49.26285,-123.11450]} icon={icon}>
                <Popup>
                    Broadway-CityHall
                </Popup>
            </Marker>

            <Marker position={[49.24915,-123.11580]} icon={icon}>
                <Popup>
                    King Edward
                </Popup>
            </Marker>

            <Marker position={[49.23315,-123.11660]} icon={icon}>
                <Popup>
                    Oakridge-41st Avenue
                </Popup>
            </Marker>

            <Marker position={[49.22625,-123.11610]} icon={icon}>
                <Popup>
                    Langara-49th Avenue
                </Popup>
            </Marker>

            <Marker position={[49.20965,-123.11700]} icon={icon}>
                <Popup>
                    Marine Drive
                </Popup>
            </Marker>

            <Marker position={[49.19565,-123.12590]} icon={icon}>
                <Popup>
                    Bridgeport
                </Popup>
            </Marker>

            <Marker position={[49.18400,-123.13630]} icon={icon}>
                <Popup>
                    Aberdeen
                </Popup>
            </Marker>

            <Marker position={[49.17455,-123.13645]} icon={icon}>
                <Popup>
                    Lansdowne
                </Popup>
            </Marker>

            <Marker position={[49.16810,-123.13625]} icon={icon}>
                <Popup>
                    Richmond-Brighouse
                </Popup>
            </Marker>

            <Marker position={[49.19670,-123.14650]} icon={icon}>
                <Popup>
                    Templeton
                </Popup>
            </Marker>

            <Marker position={[49.19300,-123.15800]} icon={icon}>
                <Popup>
                    Sea Island Centert
                </Popup>
            </Marker>

            <Marker position={[49.19420,-123.17830]} icon={icon}>
                <Popup>
                    YVR-Airport
                </Popup>
            </Marker>

            

            {/* <Polyline pathOptions={redOption} positions={polyline}
            /> */}

            <Polyline pathOptions={blueOption} positions={multiPolyline}
            />

           {/*  <Circle center={center} pathOptions={fillBlueOption} radius={200}/>
            <CircleMarker center={[49.25299, -123.01650]} pathOptions={redOption} radius={20}>
                <Popup>Popup in CircleMarker</Popup>
            </CircleMarker> */}



        </MapContainer>

    )
}

export default Map;