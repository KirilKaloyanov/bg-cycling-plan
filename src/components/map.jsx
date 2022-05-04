import React from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Popup,
  GeoJSON,
} from "react-leaflet";
import ev13 from "../data/IronCurtainTrail10.js";
import ev6 from "../data/DunavChernoMore2.js";
import mapData from "../data/NatVelo.json";

export default function Map() {
  function mapArrayToRoute(coordsData) {
    let lineArray = [];
    for (let key of coordsData.features) {
      let coordsArray = [];
      for (let coords of key.geometry.coordinates) {
        coordsArray.push([coords[1], coords[0]]);
      }
      lineArray.push(coordsArray);
    }
    return lineArray;
  }

  let ev6Route = mapArrayToRoute(ev6);
  let ev13Route = mapArrayToRoute(ev13);

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
          <Popup>EuroVelo 13 - Пътят на Желязната завеса</Popup>
        </Polyline>
        <GeoJSON data={mapData.features} />
      </MapContainer>
    </div>
  );
}
