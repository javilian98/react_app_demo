import React, {Component} from 'react';

import '../css/styles.css';

export default class Header extends Component {

  state = {
    keywords: ''
  };

  inputChangeHandler = (event) => {
    this.setState({
      keywords: event.target.value
    });
  } 

  render() {  
    return (
      <div>
        <header>
          <div className='logo'
            onClick={ this.inputChangeHandler }>Logo</div>
          <input type="text" onChange={ this.inputChangeHandler } />
          <div>{ this.state.keywords }</div>         
        </header>
      </div>
    )
  }
};

//export default Header;