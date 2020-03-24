import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs, InfoWindow, LoadScript, Circle } from "react-google-maps"

import MapTheme from './theme'

const MapBuild = withScriptjs(
  withGoogleMap(props => {

    const onLoad = infoWindow => {
      console.log('infoWindow: ', infoWindow)
    }
    let infoWindowActive = false;
    let markers = props.data.map((item, key) =>
    <Marker key = {key} position = { item.location } onLoad={onLoad} onClick = {() => handleToggleOpen()} >
      <InfoWindow key = {key} position = { item.location } onLoad={onLoad} > 
        <h1>{ item.city }</h1>
      </InfoWindow>
    </Marker>
  )

    function handleToggleOpen(){
      infoWindowActive = true
      alert()
    }

    return (
      <GoogleMap
      defaultZoom = {7}
      defaultCenter = { { lat: -1.9382072, lng: -78.3260329 } }
      defaultOptions = {{ styles: MapTheme }}
    >
    { markers }
    </GoogleMap>
    )
  })
);

class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      actived: true,
      ubications: []
    };
  }

  componentDidMount(){
    this.setState({
      data: [
        {
          location: { lat:  -2.1524996, lng: -80.050141 },
          city: 'Guayaquil'
        }
      ]
    })
  }

  render(){
    return <MapBuild
      activated = {this.state.actived}
      data = {this.state.data}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBXRGdzHI4vx-HDA8tukA2SscbZjuuzg-4"
      loadingElement={<div style={{ width: `100%`, height: `100%` }} />}
      containerElement={<div style={{ width: `100%`, height: `100vh` }} />}
      mapElement={<div style={{ width: `100%`, height: `100%` }} />}
    />
  }
}

export default Map