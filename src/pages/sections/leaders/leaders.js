import React from 'react';
import './leaders.css';
import Topper from './topper.js';

export default class Leaders extends React.Component {
  render() {
    const toppers = [
      {src:"./media/1.jpg",name:"Rajat Sharma"},
      {src:"./media/1.jpg",name:"Rajat Sharma"},
      {src:"./media/1.jpg",name:"Rajat Sharma"}
    ].map((source,i) => <Topper key={i} source={source.src} name={source.name} />);
    return(
      <div className="row ldrs">
        {toppers}
      </div>
    );
  }
}
