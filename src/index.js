import React from 'react';
import ReactDOM from 'react-dom';
//import  CLASSNAME from FILENAME.JS
import Achievements from './pages/achievements/achievements.js';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';
//firebase config
var config = {
apiKey: "AIzaSyANGYuXqisC5SLOslBSZnvKPXAaPPk-rBc",
authDomain: "achiversadminpanel.firebaseapp.com",
databaseURL: "https://achiversadminpanel.firebaseio.com",
projectId: "achiversadminpanel",
storageBucket: "achiversadminpanel.appspot.com",
messagingSenderId: "853392394428"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Achievements />,  //CLASSNAME
  document.getElementById('app')// to be rendered in this segment
);
