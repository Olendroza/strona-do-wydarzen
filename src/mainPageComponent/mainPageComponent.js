import React, { Component } from 'react';
import{LocationSearchInput} from '../MeakeEvent/locationSuggest'
import styles from './mainPageComponent.css'


export class MainPageComponent extends Component{
    render(){
        return(

            <div className='innerDiv'>
                <h1>Znajdź wydarzenia</h1>
                <div className='searchDiv'>
                <LocationSearchInput message={"Wyszukaj miasto"}/>
                <button className="searchButton"> szukaj</button>

                </div>
            </div>

        );
    }
}