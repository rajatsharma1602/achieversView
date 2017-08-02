import React from 'react';
import './timeperiod.css';
import Card from './../card/card.js';
import * as firebase from 'firebase';

export default class TimePeriod extends React.Component {

  componentWillMount(){
    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    this.state={
      timeSpan: {
                  year : this.props.year,
                  month : monthNames[parseInt(this.props.month)]
                },
      achievements:[]
    }
    const db = firebase.database().ref();
    const dbRef = db.child('achievements/'+this.props.period);
    var achievementComponent = this;
    var data = [];
    dbRef.once('value',function(snapshot){
      snapshot.forEach((childSnapshot)=>{
        console.log(childSnapshot.val());
        data.push(childSnapshot.val());
      });
      achievementComponent.setState({
        achievements:data
      });
    });
  }
  render(){
    let AchievementCards = [];
    if(this.state.achievements !== undefined){
      if(this.state.achievements.length>0){
        let achievementItems = this.state.achievements;
        AchievementCards = achievementItems.map((achievement,i)=>

            <Card
              key={i}
              category = {achievement.category}
              pic = {achievement.photo}
              achiever={achievement.name}
              desc = {achievement.desc}
              score = {achievement.score}
            />

        );
      }
    }
    // const AchievementCards = [
    //   {achiever:"Rajat Sharma",position:"First position",eventName:"WebStorm"},
    //   {achiever:"Rajat Sharma",position:"Third position",eventName:"Views"}
    // ].map((achievement,i) =>
    //               <Card
    //                 key={i}
    //                 achiever={achievement.achiever}
    //                 position = {achievement.position}
    //                 eventName = {achievement.eventName}
    //               />
    //       );

    return(
      <div className="timeline-item col-md-12">
        <span className="date_time">{this.state.timeSpan.month} {this.state.timeSpan.year}</span>
        <div className="row">
{AchievementCards}
        </div>
      </div>

  );
  }
}
