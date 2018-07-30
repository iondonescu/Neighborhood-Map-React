import React, {Component} from 'react'

class PlacesList extends Component {
  render(){
    return (
      <ul className='list'>
      {this.props.locations.map(location =>{
        return (
          <li
          key={location.title}
          >
          {location.title}
          </li>
        )
      })}
      </ul>
    )
  }
}
export default PlacesList;
