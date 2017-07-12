import React from 'react';
import 'bootstrap';
import './header.css';

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <header>
          <img className="img-responsive" src="./media/achvrs.jpg" width="1366" height="500" />
        </header>
      </div>
    );
  }
}
