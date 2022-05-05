import React from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Popup,
  GeoJSON,
} from "react-leaflet";
import mapArrayToRoute from "../data/mapArrayToRoute.js";
import ev13 from "../data/IronCurtainTrail10.js";
import ev6 from "../data/DunavChernoMore2.js";
import nat4 from "../data/Predbalkan4";
import mapData from "../data/NatVelo.json";

export default function Map() {

  let ev6Route = mapArrayToRoute(ev6);
  let ev13Route = mapArrayToRoute(ev13);
  let nat4Route = mapArrayToRoute(nat4);

  return (
    <div className="map_container">
      <MapContainer center={[42.705, 25.09]} zoom={7.4} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Polyline
          pathOptions={{ color: "blue", weight: 5 }}
          positions={ev6Route}
        >
          <Popup>EuroVelo 6 - Дунавски велосипеден маршрут</Popup>
        </Polyline>
        <Polyline
          pathOptions={{ color: "red", weight: 5 }}
          positions={ev13Route}
        >
          <Popup>Predbalkan</Popup>
        </Polyline>
        <Polyline
          pathOptions={{ color: "green", weight: 5 }}
          positions={nat4Route}
        >
          <Popup></Popup>
        </Polyline>
        {/* <GeoJSON data={mapData.features} /> */}
      </MapContainer>
    </div>
  );
}
