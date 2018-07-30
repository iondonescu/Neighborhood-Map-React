import React, {Component} from 'react'

class PlacesList extends Component {
  render(){
    return (
    <div>
      <input className="search"
      type="text"
      placeholder ="Type a location"
      />
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
    </div>
    )
  }
}
export default PlacesList;
