import React, { Component } from 'react';

import './homepage.css';

const padNum = (num)=>{
    if(num <10 ){
        return '00' + num
    }
    else if (num < 100){
        return '0' + num
    }
    
}