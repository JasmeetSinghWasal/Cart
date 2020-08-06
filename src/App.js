import React, { Component } from 'react';
import './App.css';
import GroceryItem from './components/GroceryItem';
import GroceryCart from './components/GroceryCart';
import Undo from './components/Undo';
import Redo from './components/Redo';

export default class App extends Component {

  render(){
    return    <div id="grocery-container">  
    <center><h2>Welcome to my react app!</h2></center>
    <Undo/> <Redo/>
    
      <GroceryItem />
      <GroceryCart />
    </div>
  
  }
     
}

