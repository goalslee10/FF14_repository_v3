import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import style from '../../styles/Home.module.css'
export default function Map() {
    return (
        <MapContainer className={style.map} center={[25, 25]} minZoom={2} zoom={4} scrollWheelZoom={true}>
            <TileLayer
                noWrap={true}
                attribution='its offline'
                url="./images/ff14map/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                   1번 풍맥
                </Popup>
            </Marker>
        </MapContainer>

    );

}