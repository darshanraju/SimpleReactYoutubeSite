import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props); //Searchbar 'extends' Component, component is its own class with its own constructur, so need to call super first to then we can extend its properties

    this.state = {
      //Properties of this state is only 'searchTerm'
      searchTerm: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.searchTerm}
          onChange={event => this.onInputChange(event)}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.props.onSearchTermChange(event.target.value);
    }
  };

  onInputChange(event) {
    //Update state by setting searchTerm to new value, every time there is a 'change' in the seach bar

    var newSearchTerm = event.target.value;

    this.setState({
      searchTerm: newSearchTerm
    });
  }
}

export default SearchBar; //Exporting this component, so it can be used in rendering other pages
