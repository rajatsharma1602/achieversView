import React from 'react';
import './achievements.css'
import Header from './../sections/header/header.js'
import Footer from './../sections/footer/footer.js'
import TimePeriod from './../sections/timeperiod/timeperiod.js'
import Leaders from './../sections/leaders/leaders.js'

class Achievements extends React.Component {

// following segment will be rendered on page
  render() {
    const timelineItems = [
      "Jan 2017",
      "Oct 2016",
      "Sept 2016"
    ].map((period,i)=> <TimePeriod key={i} period={period} />);
    return (
      // this is the segment to be loaded
      <div className="achievements-container">
        <Header />
        <div className="container ">
          <div className="col-md-2 leaders text-center">
            <h2>Top Achievers</h2>
              <Leaders />
          </div>
          <div className="col-md-10 achievements text-justify">
            <h2>Timeline</h2>
            {timelineItems}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Achievements;
