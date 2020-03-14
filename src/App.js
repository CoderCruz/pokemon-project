import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      error: null,
      isLoaded: false,
      apiData: []
    }
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(res => res.json())
    .then(
      (results) => {
        this.setState({
          isLoaded: true,
          apiData: results
        })
        console.log(this.state.apiData)
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        })
      }
    )
  }
  render() {
    return(
      <div className="App">
        <h1>Hello</h1>
      </div>
    )
  }
}

export default App;
