import React, { Component } from 'react';
import{LocationSearchInput} from '../MeakeEvent/locationSuggest'
import styles from './mainPageComponent.css'
import Button from '@material-ui/core/Button';

export class MainPageComponent extends Component{

    handlePlaceChoise(choise,lat,lng){
        this.props.handleSelect(choise,lat,lng)
    }
    render(){
        return(

            <div className='innerDiv'>
            Wpisz miasto, aby znaleść wydarzenia w Twojej okolicy lub sortuj wydarzenia
                <div style={{padding:'25'}}>
                    <Button className="buttons" onClick={()=>this.handlePlaceChoise(1,0,0)}> Alfabetycznie</Button>
                    <Button className="buttons" onClick={()=>this.handlePlaceChoise(2,0,0)}> Według kategorii</Button>
                    <Button className="buttons" onClick={()=>this.handlePlaceChoise(3,0,0)}> Według daty</Button>
                </div>
                <div className='searchDiv'>
                <LocationSearchInput message={"Wyszukaj miasto"} handleSelect={(lat,lng)=>this.handlePlaceChoise(0,lat,lng)}/>
                </div>
                
            </div>

        );
    }
}