import React,{ Component } from 'react'
import CityMap from './components/CityMap'
import PlacesList from './components/PlacesList'

class App extends Component {
  state = {
  locations: [],
  locationInfo: {},
  query: ''
}

// Fetch locations from Forsquare
componentDidMount() {
  fetch('https://api.foursquare.com/v2/venues/explore?ll=45.266301,27.961932&client_id=VCVHQQITMFOPDCFEERWDBMKB0D3RSVQEE5COLF22DQJN1UKS&client_secret=HLLNSH0U5GW3J2KTNE102YRSJ3UMMJAU5VL4KJU5IC33RV2B&v=20180729')
  .then(response => response.json())
  .then(data => {
    const locations = data.response.groups[0].items.map(item => {
      return {
        position: { lat: item.venue.location.lat, lng: item.venue.location.lng },
        title: item.venue.name,
        id: item.venue.id,
        category: item.venue.categories[0].name,
        address: item.venue.location.address,
        crossStreet: item.venue.location.crossStreet,
        state: item.venue.location.state,
        coordinates: item.venue.location.lat + ', ' + item.venue.location.lng,
        postalCode: item.venue.location.postalCode
      }
    })
    this.setState({ locations });
    console.log('Fetched locations: ', this.state.locations);
  })
  .catch(err => {
    console.log('Foursquare error:', err);
    alert('Something went wrong while fetching the locations from Forsquare. Please try again later.');
  })
}
  render() {
    return (
      <div>
        <CityMap
        locations={this.state.locations}
	      	query={this.state.query}
          />
        <PlacesList
        locations={this.state.locations}
        query={this.state.query}
        />
      </div>
    );
  }
}
export default App;
