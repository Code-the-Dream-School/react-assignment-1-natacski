import React from 'react';
import logo from '../images/logo.png'; 



const Header = () => {
  return(
    <div>
      <img className="image1" src={ logo } alt="Logo" width={200} height={200} />
      <h1 className='niceFont'>TIC TAC TOE</h1>
     
    </div>
  );
}

export default Header;
