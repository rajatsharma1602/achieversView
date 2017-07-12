import React from 'react';
import './timeperiod.css';
import Card from './../card/card.js';
export default class TimePeriod extends React.Component {

  render(){
    const AchievementCards = [
      {achiever:"Rajat Sharma",position:"First position",eventName:"WebStorm"},
      {achiever:"Rajat Sharma",position:"Third position",eventName:"Views"}
    ].map((achievement,i) =>
                  <Card
                    key={i}
                    achiever={achievement.achiever}
                    position = {achievement.position}
                    eventName = {achievement.eventName}
                  />
          );


    return(
      <div className="timeline-item col-md-12">
        <span className="date_time">{this.props.period}</span>
        <div className="row">

          {AchievementCards}
        </div>
      </div>

  );
  }
}
