import React from 'react';
import './card.css';

export default class Card extends React.Component {
  componentWillMount(){
    if(this.props.type){
      this.state={
        name:this.props.achiever[0].name + " +"+(parseInt(this.props.size)-1).toString(),
        styleClass:" col-md-12 bdr ".concat(this.props.category)
      }
    }
    else{
      this.state={
        name:this.props.achiever,
        styleClass:" col-md-12 bdr ".concat(this.props.category)
      }
    }

  }
  render (){
    return(
      <div className="achievement-item col-md-4 col-xs-12 col-sm-8 col-lg-4">
        <div className={this.state.styleClass}>
          <span className="coin">{this.props.score}</span>
          <div className="col-md-12 col-xs-12 img-bg center-block">
            <img width="120" height="120" className="img-responsive img-circle card-img" src={this.props.pic} alt={this.props.achiever} />
          </div>
          <div className="col-md-12 col-xs-12 text-center">
            <h1> {this.state.name}</h1>
              <p> {this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
