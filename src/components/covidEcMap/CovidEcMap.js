import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

// const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


import MapTheme from './theme'

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: -1.9382072, lng: -78.3260329 }}
      defaultOptions={{ styles: MapTheme }}
    >
      <Marker
          key={'i'}
          position={{ lat:  -2.1524996, lng: -80.050141}}
          onClick={() => props.handleToggleOpen()} // marker ID is the key here. 
      ></Marker>
      <Marker
          key={'i'}
          position={{ lat:  -0.1865938, lng: -78.5706235}}
          // onClick={() => this.handleToggleOpen(i)} // marker ID is the key here. 
      ></Marker>
      <Marker
          key={'ii'}
          position={{ lat:  -1.2571434, lng: -78.6566383}}
          // onClick={() => this.handleToggleOpen(i)} // marker ID is the key here. 
      ></Marker>
      <Marker
          key={'iii'}
          position={{ lat:  -2.8922687, lng: -79.0243995}}
          // onClick={() => this.handleToggleOpen(i)} // marker ID is the key here. 
      ></Marker>
    </GoogleMap>
    
  ))
);

class Map extends Component {

  handleToggleOpen(){
    alert('Desplegar los datos')
  }

  render(){
    return <MyMapComponent
      handleToggleOpen = {this.handleToggleOpen}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXRGdzHI4vx-HDA8tukA2SscbZjuuzg-4"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  }
}

export default Map