import React from 'react';
import './card.css';

export default class Card extends React.Component {
  componentWillMount(){
    // if(this.props.isTeam){
    //   this.state={
    //     teamName:this.props.team + " +"+(this.props.teamSize-1),
    //     styleClass:" col-md-12 bdr ".concat(this.props.category)
    //   }
    // }
    // else{
      var splitAt = this.props.achiever.indexOf(" ");
      this.state={
        fname:this.props.achiever.substr(0,splitAt),
        lname:this.props.achiever.substr(splitAt+1,this.props.achiever.length),
        styleClass:" col-md-12 bdr ".concat(this.props.category)
      }
    // }

  }
  render (){
    // if(this.props.isTeam){
    //     <h2>{this.state.teamName}</h2>
    //   }
    //   else{<div></div>
    // }<h1>{this.state.fname}</h1>
    // </div>
    // <h3>{this.state.lname}</h3><div className="col-md-12">
    return(
      <div className="achievement-item col-md-4 col-xs-6 col-sm-6 col-lg-4" id={this.props.score}>
        <div className={this.state.styleClass}>
          <span className="coin">{this.props.score}</span>
          <div className="col-md-12 col-xs-12 img-bg center-block">
            <img className="img-responsive img-circle card-img" src={this.props.pic} alt={this.props.achiever} />
          </div>

          <div className="col-md-12 col-xs-12 text-center">
            <h1> {this.props.achiever}</h1>
              <p> {this.props.desc}</p>
          </div>


        </div>
      </div>
    );
  }
}
