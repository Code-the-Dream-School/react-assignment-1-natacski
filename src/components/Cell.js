import React, {Component}  from 'react';
import logo1 from '../images/1.png';
import logo2 from '../images/0.png';

class Cell extends Component {

  render(){
    return(
    <button className="square" onClick={() => this.props.onClick()}>{this.props.value === 'x' ? <img className="squareIcon" src={ logo1 } alt="Logo-x"/> : (this.props.value === 'o'?<img className="squareIcon" src={ logo2 } alt="Logo-o"/>:null)}</button>
    );
  }

}
export default Cell;
