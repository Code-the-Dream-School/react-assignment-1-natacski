import React, {Component}  from 'react';
import Cell from './Cell';
import logo from '../images/logo.png';
import logo1 from '../images/1.png';
import logo2 from '../images/0.png'; 
import { Container, Row, Col, Button } from 'react-bootstrap';


class Board extends Component {

  constructor(props) {
    super(props);

    this.state = {
      squares: [ ],
      nextTurn: true,
      winnerMessage: ''
    };
  }

  findTheWinner = (squares) => {
    const winnerCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for( let i = 0; i < winnerCombinations.length; i++ ) {
      const [a,b,c] = winnerCombinations[i];
  
      if( squares[a] === 'x' && squares[a] === squares[b] && squares[a] === squares[c])
      {
      this.setState({winnerMessage: 'X IS THE WINNER!'});
                 
           return true;
      }
      else if( squares[a] === 'o' && squares[a] === squares[b] && squares[a] === squares[c])
      {
        this.setState({winnerMessage: 'O IS THE WINNER'});
        return true;
      }
  
    }
   return false;
   
  }

  handleSquaresClick(i) {
    const squares = this.state.squares.slice();
   
    if (squares[i])
    {
      alert('There is already something there!');
      return;
    }
  
    squares[i] = this.state.nextTurn ? "x" : "o";
    
    this.setState({
      squares: squares,
      nextTurn: !this.state.nextTurn
    });

   
    this.findTheWinner(squares);
  }

  renderCell(i) {
    return (
    <Cell 
    value={this.state.squares[i]} 
    onClick ={() => this.handleSquaresClick(i)}
    />
    )
  }
  
  resetBoard = (e) => {
    e.preventDefault();
    this.setState( {squares: [ ],
    nextTurn: true,
    winnerMessage: ''
    })
  }

  


  render(){
           
      const takeTurns = `${this.state.nextTurn ? 'X' : 'O'} is your turn`
      
      return(
        <>
         <Container>
          <Row>
            <Col>
              <div>
                <img src={ logo } alt="Logo" className={"logo"} />
                <h2 className='niceFont'>TIC TAC TOE</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <h3 className='niceFont' style={{marginLeft: 380, color: '#0080ff'}} >{this.state.winnerMessage}</h3>
              </div>
            </Col>
          </Row>
          <Row style={{marginLeft: 55}}>
            <Col  className='niceFont'> Player <img className="image2" src={ logo1 } alt="Logo" width={20} height={20} />: {this.props.player1Name} </Col>
            <Col> 
               <div clasName="board" style={{marginTop: 50}}>
          
                  <div className="niceFont">{ takeTurns }</div>
                  <div className="row">
                      {this.renderCell(0)}
                      {this.renderCell(1)}
                      {this.renderCell(2)}
                  </div>
                
                  <div className="row">
                      {this.renderCell(3)}
                      {this.renderCell(4)}
                      {this.renderCell(5)}
                  </div>
              
                  <div className="row">
                      {this.renderCell(6)}
                      {this.renderCell(7)}
                      {this.renderCell(8)}
                  </div>
               </div>
            </Col>
            <Col className='niceFont'> Player <img className="image2" src={ logo2 } alt="Logo" width={20} height={20} />: {this.props.player2Name} </Col>
          </Row>
          <Row style={{marginBottom: 50}}> 
            <Col>
               <Button variant="outline-info" className='niceFont'
                onClick = {this.props.newGame}>New Game</Button>{' '}
            </Col>
            <Col>
            </Col>
            <Col>
              <Button style={{marginLeft: 5}} variant="outline-info" className='niceFont'
              onClick = {this.resetBoard}>Reset</Button>{' '}
            </Col>
          </Row>
        </Container> 
  
       </>
      );
  }
}



export default Board;


 