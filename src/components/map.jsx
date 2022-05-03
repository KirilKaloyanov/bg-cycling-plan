import React from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
  GeoJSON,
} from "react-leaflet";
import mapData from "../data/NatVelo.json";

export default function Map() {
  console.log(mapData.features[0].geometry.coordinates);
  return (
    <div className="map_container">
      <MapContainer center={[42.705, 25.09]} zoom={7.4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[42.705, 25.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable. URaaa
          </Popup>
        </Marker> */}
        <GeoJSON data={mapData.features} />
        {/* <GeoJSON data={mapData.features[0].geometry.coordinates} /> */}
        {/* <Polyline
          pathOptions={{ color: "red" }}
          positions={mapData.features[0].geometry.coordinates}
        ></Polyline> */}
      </MapContainer>
    </div>
  );
}
