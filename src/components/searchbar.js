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
    changeText(currentText ) {
        this.setState({ currentText });
        //console.log({currentText});

    }
    onChange=(e)=>{
        const input= e.target.value;

        if(input ==='' || input ===' '){
            this.setState({searchResults:[]});
        }else{
            const searchResultsArr=pkmn_list.map((e,i)=>{
                if(e.toUpperCase().includes(input.toUpperCase())){
                    return e;
                }
            })
        }
    }
}