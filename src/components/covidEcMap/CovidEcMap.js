import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

import MapTheme from './theme'

const MapBuild = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: -1.9382072, lng: -78.3260329 }}
      defaultOptions={{ styles: MapTheme }}
    >
      <Marker
          key={'i'}
          position={{ lat:  -2.1524996, lng: -80.050141}}
          onClick={() => props.handleToggleOpen()} 
      ></Marker>
      <Marker
          key={'i'}
          position={{ lat:  -0.1865938, lng: -78.5706235}}
          onClick={() => props.handleToggleOpen()}
      ></Marker>
      <Marker
          key={'ii'}
          position={{ lat:  -1.2571434, lng: -78.6566383}}
          onClick={() => props.handleToggleOpen()}
      ></Marker>
      <Marker
          key={'iii'}
          position={{ lat:  -2.8922687, lng: -79.0243995}}
          onClick={() => props.handleToggleOpen()}
      ></Marker>
    </GoogleMap>
    
  ))
);

class Map extends Component {

  handleToggleOpen(){
    alert('Desplegar los datos')
  }

  render(){
    return <MapBuild
      handleToggleOpen = {this.handleToggleOpen}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXRGdzHI4vx-HDA8tukA2SscbZjuuzg-4"
      loadingElement={<div style={{ width: `100%`, height: `100%` }} />}
      containerElement={<div style={{ width: `100%`, height: `100vh` }} />}
      mapElement={<div style={{ width: `100%`, height: `100%` }} />}
    />
  }
}

export default Map