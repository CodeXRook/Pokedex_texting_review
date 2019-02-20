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
        Axios.get(pkUrl)
        .then(response => {
            const {
              name,
              id,
              sprites,
              moves,
              types,
              stats,
            } = response.data;

            let image = `http://img.pokemondb.net/artwork/${name}.jpg`;

            const spritesArr = [sprites.back_default, sprites.back_shiny, sprites.font_default, sprites.front_shiny];

            const typesArr =types.map(e => {
                return e.type.name;
            })
            
            const baseStatsArr= stats.map(e => {
                const val = e.base_state;
                const statName = e.base_state;
                return {statName, val};
            })
            }
        })
    }
}