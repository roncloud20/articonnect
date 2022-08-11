import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Categories from './Pages/Categories';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Extend from './Pages/Extend'
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Dash from './Pages/DashBoard';
import Notification from './Pages/Notification'
import AddWork from './Pages/Addwork';
import Edit from './Pages/Edit';
import Card from './Components/Card';
import ArtisanCard from './Components/ArtisanCard';

ReactDOM.render(
  <React.StrictMode>
    {/* <Categories/> */}
    {/* <Card name = "Babjjjjjddddddddd rrrrrrrrdddddddddd" /> */}
    {/* <ArtisanCard name = "Babatunde yusuf  folorunsho ajagbe vvvvvvvvvvvvvv" /> */}
    <Router>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/Categories" exact component={Categories}/>
        <Route path="/Extend" exact component={Extend}/>
        <Route path="/SignIn" exact component={SignIn}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Dash" exact component={Dash}/>
        <Route path="/Notification" exact component={Notification}/>
        <Route path="/AddWork" exact component={AddWork}/>
        <Route path="/Edit" exact component={Edit}/>
      </Switch>
    </Router>
    {/* <Categories/> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
