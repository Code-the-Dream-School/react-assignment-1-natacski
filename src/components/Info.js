import React, {Component} from 'react';
import Header from './Header';
import { Form } from 'react-bootstrap';
import logo from '../images/1.png'; 
import logo1 from '../images/0.png'; 



class Info extends Component{

  constructor(props) {
    super(props);
    this.state = {
      player1Value: '',
      player2Value: ''
    
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'player1')
    {
      this.setState({player1Value: event.target.value});
      this.props.setPlayer1Value(event.target.value);
    }
    else if (event.target.id === 'player2')
    {
      this.setState({player2Value: event.target.value});
      this.props.setPlayer2Value(event.target.value);
    }
  }

  handleSubmit(event) {
      event.preventDefault();
  }
    

  render() {
    return (
      <>
      <Header />
      <Form onSubmit={this.handleSubmit} className='niceFont'>
        <label>
          Player <img className="image2" src={ logo } alt="Logo-X" width={20} height={20} />
          <input id="player1" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Player <img className="image2" src={ logo1 } alt="Logo-O" width={20} height={20} />
          <input id="player2" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </Form>
      </>
    );
  }
}
       

export default Info;
