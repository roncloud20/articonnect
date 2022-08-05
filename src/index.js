import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Categories from './Pages/Categories';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Extend from './Pages/Extend'

ReactDOM.render(
  <React.StrictMode>
    {/* <Categories/> */}
    <Router>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/categories" exact component={Categories}/>
        <Route path="/extend" exact component={Extend}/>
      </Switch>
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
