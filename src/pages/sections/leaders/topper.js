import React from 'react';

class Topper extends React.Component {
  render(){
    return(
      <div className="col-md-12 ldr">
        <div className="ldr-img">
          <img src={this.props.imgSrc} className="img-circle img-responsive" alt={this.props.name} />
        </div>
        <label >{this.props.name}</label><br/>
        <label>{this.props.score}</label>
      </div>
    );
  }
}

export default Topper;
