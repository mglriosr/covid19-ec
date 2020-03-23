import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {

  componentDidMount(){
    async function getData() {
      const response = await fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest')
      const data =  await response.json()
      return data
    }
  }

  onMapClicked(){
    console.log('mapa')
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
        onClick={this.onMapClicked}
        style={mapStyles}
        initialCenter={{
         lat: -1.7945206,
         lng: -79.762017
        }}
      >
        <Marker onClick={this.onMarkerClick} name={'Current location'} />

        <InfoWindow></InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBXRGdzHI4vx-HDA8tukA2SscbZjuuzg-4'
})(MapContainer);