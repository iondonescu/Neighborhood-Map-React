import React, { Component } from 'react'
import {Map, GoogleApiWrapper, Marker, Infowindow} from 'google-maps-react'

//Google Maps API script error handler
document.addEventListener("DOMContentLoaded", function(error) {
  let googleMapScript = document.getElementsByTagName('SCRIPT').item(1);
  googleMapScript.onerror = function(error) {
    console.log('Google Maps API error: ', error);
    alert('Something went wrong while fetching the map from Google. Please try again later.');
  }
});

class CityMap extends Component {

render(){
  const bound = new this.props.google.maps.LatLngBounds()
  return (
    <Map
    google={this.props.google}
    initialCenter={{lat:45.266301, lng:27.961932}}
    zoom={15}
    bounds={bound}
    >
    </Map>
  )
  }
}
export default GoogleApiWrapper({
  apiKey:'AIzaSyBWjPICGYkhv1oJwcSXWfD2BTNdoGwHVEw'
})(CityMap)
