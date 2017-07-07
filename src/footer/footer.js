import React from 'react';
import 'bootstrap';
import './footer.css';
import 'font-awesome/css/font-awesome.css';

export default class Footer extends React.Component {
  render() {
    return(
      //footer html
      <div className="container footer_container">

        <div className="col-md-4 footer-social-links text-left">
          <div>
          <ul>
            <li className=".hvr-push">
              <a target="_blank" href="https://www.facebook.com/tssgndu"><span className="fa fa-facebook"></span></a>
            </li>
            <li className=".hvr-push">
              <a target="_blank" href="https://www.twitter.com/gndutss"><span className="fa fa-twitter"></span></a>
            </li>
            <li className=".hvr-push">
              <a target="_blank" href="https://www.linkedin.com/in/technicalstudentsociety"><span className="fa fa-linkedin"></span></a>
            </li>
            <li className=".hvr-push">
              <a target="_blank" href="https://www.instagram.com/tss_gndu/"><span className="fa fa-instagram"></span></a>
            </li>
          </ul>
          </div>
        </div>

        <div className="col-md-4 footer-element">
          <div className="footer-creadit">
            <span className="theme_color">TSS</span> © 2016 All Right Reserved<br />
            Designed by: <a target="_blank" href="http://codewarriors.tssgndu.com"><b>CODE WARRIORS</b></a>
          </div>
        </div>

        <div className="col-md-4 text-right footer-element">
          &nbsp;
        </div>
      </div>
    );
  }
}
