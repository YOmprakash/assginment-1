// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  onChangeSearchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchValue} = this.state
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchValue.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="input-box"
              placeholder="Search"
              value={searchValue}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="ul-container">
            {searchResults.map(each => (
              <DestinationItem key={each.id} destinationDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
