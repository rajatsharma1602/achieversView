import React from 'react';

class Topper extends React.Component {
  render(){
    return(
      <div className="col-md-12 ldr">
        <div className="ldr-img">
          <img src={this.props.source} className="img-circle img-responsive" alt={this.props.source} />
        </div>
        <label >{this.props.name}</label>
      </div>
    );
  }
}

export default Topper;
