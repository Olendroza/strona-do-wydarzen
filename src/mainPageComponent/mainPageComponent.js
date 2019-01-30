import React, { Component } from 'react';
import{LocationSearchInput} from '../MeakeEvent/locationSuggest'
import styles from './mainPageComponent.css'


export class MainPageComponent extends Component{

    handlePlaceChoise(choise,lat,lng){
        this.props.handleSelect(choise,lat,lng)
    }
    render(){
        return(

            <div className='innerDiv'>
                <h1>Znajdź wydarzenia</h1>
                <div className='searchDiv'>
                <LocationSearchInput message={"Wyszukaj miasto"} handleSelect={(lat,lng)=>this.handlePlaceChoise(0,lat,lng)}/>
                </div>
                <div>
                    <button className="buttons" onClick={()=>this.handlePlaceChoise(1,0,0)}> Alfabetycznie</button>
                    <button className="buttons" onClick={()=>this.handlePlaceChoise(2,0,0)}> Według kategorii</button>
                    <button className="buttons" onClick={()=>this.handlePlaceChoise(3,0,0)}> Według daty</button>
                </div>
            </div>

        );
    }
}