
import logo from './logo.svg';
import React, {Component} from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import Main from './components/MainComponent';
import './App.css';

class App extends Component{
 
  render(){
  return (
    <div className="App">
      <Main />
    </div>
  );
}
}
export default App;
