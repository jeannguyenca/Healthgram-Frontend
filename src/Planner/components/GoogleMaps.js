import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

var markerStyling = {
  clear: "both",
  display: "absolute",
  backgroundColor: "#00921A",
  fontWeight: "500",
  color: "#FFFFFF",
  boxShadow: "0 6px 8px 0 rgba(63,63,63,0.11)",
  borderRadius: "23px",
  padding: "8px 16px",
  whiteSpace: "nowrap",
  width: "160px",
  textAlign: "center"
};

const maps = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyAw1zriz4pPpa2YVpyr9tAhomDohpi2FBg",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  return (
    <GoogleMap
      defaultZoom={4}
      defaultCenter={props.center}
      center={props.center}
      defaultOptions={{
        styles: props.style
      }}
    >
      {props.isMarkerShown && (
        <Marker position={props.latLng}
        // icon={markerStyling} 
        />
      )}
    </GoogleMap>
  );
});

export default maps;
