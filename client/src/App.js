import React from 'react';
import './App.css';
import axios from "axios";

//component imports
import PlayerCard from "./components/PlayerCard";

//hook imports 

class App extends React.Component {
  //create class component and state
  state={
    player: [],
  }

  componentDidMount() {
    //add axios to call
    //run npm i on the root folder to start localhost: 5000
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res =>{
        //console.log res, and continue until desired data is found
        console.log(`the response form the axios call is:`, res.data)
        //console.log typeof res.data
        console.log(`res.data is a/an`, typeof res.data)
        //set res.data to state
        this.setState({
          player: res.data
        })
      })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Test, hello world!</h1>
          <div className="card-container">
            <PlayerCard key={this.state.player} player={this.state.player}/>
            {this.state.player.map((player, key) => {
            console.log(player);
            return <PlayerCard key={key} player={player} />
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
