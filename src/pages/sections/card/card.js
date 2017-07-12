import React from 'react';
import './card.css';

export default class Card extends React.Component {
  render (){
    return(
      <div className="achievement-item col-md-6">
        <div className="col-md-12 bdr">
          <div className="col-md-12">
            <div className="col-md-4 center-block">
              <img className="img-responsive img-circle" src="./media/1.jpg" alt="sample pic" />
            </div>
            <div className="col-md-8">
              <p><label>{this.props.achiever}</label></p>
              <p><label>{this.props.position}</label></p>
              <p><label>{this.props.eventName}</label></p>
            </div>
          </div>
          <div className="col-md-12">
            <p>Im speaking with myself, number one, because I have a very good brain and Ive said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.</p>
          </div>
        </div>
      </div>
    );
  }
}
