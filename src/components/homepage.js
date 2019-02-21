import React, { Component } from 'react';

import './homepage.css';

const padNum = (num)=>{
    if(num <10 ){
        return '00' + num
    }
    else if (num < 100){
        return '0' + num
    }
    else if (num <1000){
        return num
    }
}

const Homepage = props => {
    const {data} = props;
    const ListButton = data.map((e, i) => {
        return (
            <>
            <div key={i}
        )
    })
}