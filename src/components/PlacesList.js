import React, {Component} from 'react'
import escregexp from 'escape-regexp'

class PlacesList extends Component {
  render(){
    const expression = new RegExp(escregexp(this.props.query).toLowerCase().trim())
    return (
    <div>
      <input className="search"
      type="text"
      placeholder ="Search a location"
      value={this.props.query}
      onChange={this.props.onChangeQuery}
      onClick={this.props.onInputClick}
      tabIndex="1"
			aria-labelledby="filter"
      />
      <ul className='list'>
          {this.props.locations.filter(location => {
				return expression.test(location.title.toLowerCase())
			}).map(location =>{
            return (
              <li
              key={location.title}
              onClick={this.props.onClickLocation}
              tabIndex="2"
						  aria-label="Location"
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
