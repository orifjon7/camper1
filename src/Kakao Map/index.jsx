import React from "react";

import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { campingPlaces } from "../mock/camping";
const KakaoMap = () => {
  const { id } = useParams();
      const camping = campingPlaces.find((item) => item.id === parseInt(id));
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fc8a4d5a0ea6a396ffd1625226c24e83"
    );
    my_script.then(() => {
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(camping.campingPlace.coordinates.lat, camping.campingPlace.coordinates.lng),
          level: 4,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [new kakao.maps.LatLng(camping.campingPlace.coordinates.lat, camping.campingPlace.coordinates.lng)];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  },);
  return (
    <Wrapper style={{ display: "flex", justifyContent: "center" }}>
      <MapContainer>
       
        <div id="map" className="map" />
      </MapContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  margin: 10px 0;
  width: 100%;
  .map {
    flex: 1;
    height: 400px;
    /* width: 400px;
    height: 400px; */
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: 400px;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  .map {
    flex: 1;
    height: 400px;
    /* width: 400px;
    height: 400px; */
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    h1 {
      margin: 0;
      padding: 0;
    }
    .map {
      display: none;
    }
  }
`;


export default KakaoMap;
