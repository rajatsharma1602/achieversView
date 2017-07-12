import React from 'react';
import ReactDOM from 'react-dom';
//import  CLASSNAME from FILENAME.JS
import Achievements from './pages/achievements/achievements.js';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Achievements />,  //CLASSNAME
  document.getElementById('app')// to be rendered in this segment
);
