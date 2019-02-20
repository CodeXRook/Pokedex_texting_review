import React from 'react';
import './searchbar.css';
import {pkmn_list} from './pkmn-list';

class Searchbar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            initialState:"Search pokemon",
            currentText: " ",
            searchResults:[]
        } 
    }
}