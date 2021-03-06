import React, { Component } from 'react'
import {Map, GoogleApiWrapper, Marker,InfoWindow} from 'google-maps-react'
import escregexp from 'escape-regexp'


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
  const expression = new RegExp(escregexp(this.props.query).toLowerCase().trim())
	    for (let i = 0; i < this.props.locations.length; i++) {
      		bound.extend(this.props.locations[i].position)
    	}

  return (

    <Map
    google={this.props.google}
    initialCenter={{lat:45.266301, lng:27.961932}}
    zoom={15}
    bounds={bound}
    >

    {
  this.props.locations.filter(location => {
						return expression.test(location.title.toLowerCase())
					})
  .map(location => {
        return (
          <Marker
          // props of featched locations
            key={location.id}
            address={location.address}
            category={location.category}
            coordinates={location.coordinates}
            crossStreet={location.crossStreet}
            position={{ lat: location.position.lat, lng: location.position.lng}}
            postalCode={location.postalCode}
            state={location.state}
            title={location.title}
          // set animation for markers
            animation={this.props.google.maps.Animation.Fo}
            onClick = {this.props.onClickMarker}

          />
        )
  })
}
    <InfoWindow marker = {this.props.markerSelected} visible = {this.props.markerInfoWindowSelected}>
      <div>
        <h2>{this.props.placeSelected.title}</h2>
        <h3>{this.props.placeSelected.category}</h3>
        <p>Address:{this.props.placeSelected.address}</p>
        <p><strong> More on <a rel="external" href="https://foursquare.com/">Foursquare</a></strong></p>
        
      </div>

    </InfoWindow>
  </Map>
  )
  }
}
export default GoogleApiWrapper(

  {
  apiKey:'AIzaSyBWjPICGYkhv1oJwcSXWfD2BTNdoGwHVEw'
})(CityMap)
