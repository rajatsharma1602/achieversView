import React from 'react';
import './card.css';

export default class Card extends React.Component {
  componentWillMount(){
    let descLen = this.props.desc.length;
    if(this.props.type){ //is a team event
      let name = this.props.achiever[0].name;
      let fname = name.substr(0,name.indexOf(" "));
      this.state={
        name: fname +" +"+(parseInt(this.props.size,10)-1).toString(),
        styleClass:" col-md-12 bdr ".concat(this.props.category)
      }
    }
    else{
      //is an individual event
      //limit name to 2 words
      let full = this.props.achiever;
      let fname = full.substr(0,full.indexOf(" "));
      // var fname;
      // var index = full.indexOf( ' ', full.indexOf( ' ' ) + 1 );
      // if(index!=-1){
      //   fname = full.substr(0,index);
      // }
      // else {
      //   fname = full;
      // }
      this.state={
        name:fname,
        styleClass:" col-md-12 bdr ".concat(this.props.category)
      }
    }
    //shorten length of description max 100 chars
    if(descLen>100){
      this.setState({
        desc:this.props.desc.substr(0,97)+"..."
      })
    }
    else {
      this.setState({
        desc:this.props.desc
      })
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
          <div className="col-md-12 col-xs-12 text-center detail">
            <h1> {this.state.name} <span>{(this.props.type)?"more":""}</span></h1>
              <p> {this.state.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
