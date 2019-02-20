import Axios from 'axios';
import React from 'react';
import './profile.css';

class Profile extends Component {
    constructor (props) {
        super(props);

        this.state ={
            name: '',
            id: 0,
            image: '',
            sprites: [],
            types: [],
            baseStats: [],
            moves: []
          }
    }

    getPK = (name) => {
        let pkUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
        
    }
}