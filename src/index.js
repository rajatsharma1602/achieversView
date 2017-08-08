import React from 'react';
import ReactDOM from 'react-dom';
//import  CLASSNAME from FILENAME.JS
import Achievements from './pages/achievements/achievements.js';
import User from './pages/user/user.js';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

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

const app = document.getElementById('app');

ReactDOM.render(
  //<Achievements />,  //CLASSNAME
  <Router>
  <div>
    <Route exact path="/" component={Achievements}/>
    <Route path="/user/:userID" component={User}/>
    </div>
  </Router>,
  app// to be rendered in this segment
);
