import React, { Component } from 'react';
import Header from './Header';
import Info from './Info';
import Board from './Board';
import { Button } from 'react-bootstrap';



class Game extends Component {

  state = {
      showComponent: "Header",
      player1Value: '',
      player2Value: ''
  };

  setPlayer1Value = (value) =>{
      this.setState( {player1Value: value});
  }

  setPlayer2Value = (value) =>{
    this.setState( {player2Value: value});
  }

  newGame = () =>{
    this.setState( {
      showComponent: "Header",
      player1Value: '',
      player2Value: ''
    })
  }

  render(){

    if (this.state.showComponent === "Header") {
    return (
      <div>
        <Header />
        <Button variant="outline-info" className='niceFont'
          onClick={ () => {
            this.setState({ showComponent: "Info"});
          }}
         >Start</Button>{' '}
      </div>
    );
    } else if (this.state.showComponent === "Info") {
      return (
        <div>
          <Info setPlayer1Value={this.setPlayer1Value} setPlayer2Value={this.setPlayer2Value}/>
          <Button variant="outline-info" className='niceFont'
          onClick={ () => {
            this.setState({ showComponent: "Board"});
            }}
         >Start Game</Button>{' '}
        </div>
      );

    } else {
      return (
      <>
        <Board newGame={this.newGame} player1Name={this.state.player1Value} player2Name={this.state.player2Value} />
      </>
  
      );
    }
  }
}

export default Game;
