//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './routing/header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './routing/home';
import AboutUs from './routing/about';
import ContactUs from './routing/contact';

//import Count from './func_components/count';
//import ClockFunc from './func_components/clock_func';
//import HelloFunc from './func_components/hello_func';
//import {Hello} from './components/hello'
//import {Clock} from './components/clock'
//import {Assignment} from './components/assignment'

function App() {
  //let str='Lavu';
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/about/:org' component={AboutUs} />
      <Route path='/contact' component={ContactUs} />
      </Switch>
      </BrowserRouter>
    {/*<Count/>
      <ClockFunc/>
      <HelloFunc fname="Sravya" lname={str}/> 
      <Assignment/>
      <Clock/>
      <Hello fname='Sravya' lname={str} ></Hello>
      */}
      </div> 
  );
}

export default App;
