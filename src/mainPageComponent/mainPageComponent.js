import React, { Component } from 'react';
import {Suggest} from '../Search/autosuggest'
import{LocationSearchInput} from '../MeakeEvent/locationSuggest'



export class MainPageComponent extends Component{
    render(){
        return(
        <div className='container'>
            <div className='innerDiv'>
                <h1>Znajdź wydarzenia</h1>
                <div className='searchDiv'>
                <LocationSearchInput />
                <button> szukaj</button>

                </div>
            </div>
        </div>
        );
    }
}