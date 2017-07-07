import React from 'react';
import 'bootstrap';

import Footer from './footer/footer.js';

class Achievements extends React.Component {
// following segment will be rendered on page
  render() {
    return (
      // this is the segment to be loaded
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-xs-12">
              <span>Jan 2017</span>
            </div>
            <div className="col-md-9 col-xs-12 col-xs-offset-2 text-justify">
              <div className="well"><span>Look I am a well!</span></div>
            </div>
          </div>
          <div className="well well-sm">...</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Achievements;
