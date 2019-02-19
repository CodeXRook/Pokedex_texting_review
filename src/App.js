import Axios from 'axios';
import React, {Component } from 'react';
import './App.css';
import Profile from './components/profile';
import {Homepage} from './components/homepage';
import Searchbar from './components/searchbar';
let offset = 0;

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      search: '',
      poke_list:[],
      activeIndex: null,
    }
  }
}

export default App;