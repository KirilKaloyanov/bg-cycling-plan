import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import mapData from '../../data/data.json';

export default function Map() {
    return (
        <>
        <MapContainer center={[42.705, 25.09]} zoom={7.4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[42.705, 25.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable. URaaa
            </Popup>
          </Marker>
          <GeoJSON data={mapData.features} />
        </MapContainer>
        </>
    )
}