import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchButton} from './shared/components/SearchButton';
import {FlightsView} from './shared/components/FlightsView';
import {SearchView} from './shared/components/SearchView';
import {AirportService} from './shared/AirportService';

class App extends Component {

  state = {
      searchVisible: true,
      airports: []
  };

  componentDidMount() {
    AirportService.getAirportSources().then(airports => {
        console.log(airports);
        this.setState({
            airports    //shortcut
        })
    })
}

  searchPressed() {
      this.setState({
          searchVisible: false
      })
  }

  constructor(props){
        super(props);
        this.searchPressed = this.searchPressed.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
    }

    onBackClick() {
        this.setState({
            searchVisible: true
        }, () => {
            console.log(this.state);
            });
        console.log(this.state);
    }

  render() {
    const {searchVisible, airports}=this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to asdf</h1>
        </header>
        <h4>From</h4>
        {searchVisible && <SearchView onSearchClick={this.onSearchClick} airports={airports}/>}
        <h4>To</h4>
        {searchVisible && <SearchView onSearchClick={this.onSearchClick} airports={airports}/>}
        {!searchVisible && <FlightsView onClick={this.onBackClick}/>}
      </div>
    );
  }
}

export default App;
