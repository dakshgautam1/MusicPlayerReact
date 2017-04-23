import React, {Component} from 'react';

class SearchBar extends Component {

  onFormSubmit(event) {
    event.preventDefault()
  }
  
  render() {
    return ( 
    <div> 
      <form className="navbar-form" onSubmit={this.onFormSubmit}>
        <input type="text" className="form-control" placeholder="Search" />
        <span>
          <button type="submit" className="btn btn-default">Submit</button>
        </span>
      </form>
    </div>
    )
  }
}

export default SearchBar;