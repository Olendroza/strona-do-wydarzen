import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {LocationSearchInput} from './locationSuggest.js'
import styles from './makeEvent.css'

function formatDate(d){
    return d.substring(0,10)
}

export class MeakeEvent extends Component{
    constructor(props){
        super(props);

        this.state = {imageVisibility: true,
            title: 'Add your',
            organizer: 'Add Organizer',
            beginDate: '',
            endDate: '',
            category: 'sport',
            eventPlace: {lat: 0, lng:0},
            desc: 'Add decryption',
            imgSrc:'Add image source',
            editionMode:false,
            localChange:false,
            index : '',

            }
        this.handleTitleSubmission = this.handleTitleSubmission.bind(this)
        this.handleOrganizerSubmission = this.handleOrganizerSubmission.bind(this)
        this.handleDescSubmission = this.handleDescSubmission.bind(this)
        this.handleImgSrcSubmission = this.handleImgSrcSubmission.bind(this)
        this.handleBeginDateChange =this.handleBeginDateChange.bind(this)
        this.handleEndDateChange =this.handleEndDateChange.bind(this)
        this.handleCategoryChange=this.handleCategoryChange.bind(this)
        this.handleMeakeEventSubmisson=this.handleMeakeEventSubmisson.bind(this)
        this.handleEventSave=this.handleEventSave.bind(this)
        this.handleLocationSelect=this.handleLocationSelect.bind(this)


        

        }
    
        
        static getDerivedStateFromProps(props,state){
          if(state.localChange){
              return{localChange:false}
          }
          else{  
              let imgSrc

            if(props.editingEvent.imgSrc==='Add image source'){
                imgSrc='https://www.freeiconspng.com/uploads/no-image-icon-6.png'
            }
            else
                imgSrc = props.editingEvent.imgSrc

           return {
            title: props.editingEvent.title,
            organizer: props.editingEvent.organizer,
            beginDate: props.editingEvent.beginDate,
            endDate:props.editingEvent.endDate  ,
            category: props.editingEvent.category,
            eventPlace: props.editingEvent.eventPlace,
            desc: props.editingEvent.desc,
            imgSrc:imgSrc,
            editionMode:props.editingEvent.editionMode,
            index: props.editingEvent.index,
           }
          }
        }



    handleTitleSubmission(s){
        console.log(s)
        this.setState({title: s,localChange:true})
    }
    handleOrganizerSubmission(s){
        this.setState({organizer: s,localChange:true})
    }
    handleDescSubmission(s){
        this.setState({desc: s,localChange:true})
    }
    handleImgSrcSubmission(s){
        if(s==='')
            s='https://www.freeiconspng.com/uploads/no-image-icon-6.png' 
        this.setState({imgSrc: s,localChange:true})
    }
    handleBeginDateChange(d){
        this.setState({beginDate: d,localChange:true})
    }
    handleEndDateChange(d){
        this.setState({endDate: d,localChange:true})
    }
    handleCategoryChange(s){
        this.setState({category: s,localChange:true})

    }


    handleEventSave(){
        localStorage.setItem('event'+this.state.index,JSON.stringify(this.state));
        this.props.handleEventSave(this.state,this.state.index)
    }


    handleMeakeEventSubmisson(){
        
        this.props.handleEventCreation(this.state)
    }

    handleLocationSelect(lat,lng){
        this.setState({eventPlace:{
            lat: lat,
            lng: lng
        },
    localChange:true})
        
    }
        
    render(){
        return(

            <div className='container'>
            <div className='imageDiv'>
            
            <Image className='image'src = {this.state.imgSrc}/>
            <AddTextData className='addTitle' name={this.state.title} onSubmit={this.handleTitleSubmission}/>

            </div>
            <div className='infoContainer'>
            <div className='descDiv'>
                <AddTextData  name={this.state.organizer} onSubmit={this.handleOrganizerSubmission}/>
                Kategoria <Category onChange={this.handleCategoryChange}/> <br/>
                Od <PickDate onChange={this.handleBeginDateChange} date={this.state.beginDate}/>  do <PickDate onChange={this.handleEndDateChange}date={this.state.endDate}/>
                <AddTextData className='descStyle'  name={this.state.desc} onSubmit={this.handleDescSubmission}/>
            


                            {
                                this.state.editionMode?
                                <MeakeButton  onClick={this.handleEventSave} value='Save event'/>
                                :
                                <MeakeButton  onClick={this.handleMeakeEventSubmisson} value='Meake event'/>
                            }
            </div>
            <div className='mapContainer'>
            Dodaj adres obrazu:<AddTextData className='imgUrlInput' name={this.state.imgSrc} onSubmit={this.handleImgSrcSubmission}/>     
            Wybierz miejsce wydarzenia:
            <LocationSearchInput handleSelect={this.handleLocationSelect} 
                                 value={'Chorzów'}
                                 onChange={value => this.setState({ value })}/> 
                            
                            
            </div>               
            </div>
            </div>
        );
    }
}




class AddTextData extends Component{
    constructor(props){
        super(props);

        this.state={value: '',
                    localChange: false}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    
    static getDerivedStateFromProps(props,state){
        if(state.localChange){
            return{localchange:false}
        }
            return {value: props.name}
    }
    handleChange(e){
        this.setState({value: e.target.value,localChange:true});
    }
    handleSumbit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.value);
    }
    handleClick(){
        this.setState({value: '',localChange:true});
    }
    render(){
        return(
            <div  onBlur={this.handleSumbit}>
                <textarea  className={this.props.className}
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
                onClick={this.handleClick}/>
            </div>
        );
    }
}

class PickDate extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: new Date(this.props.date),
        localChange:false
        
      };
      this.handleChange = this.handleChange.bind(this);
    }
   
    static getDerivedStateFromProps(props,state){
        if(state.localChange){
            return{localchange:false}
        }
            return {startDate: props.date}
    }

    handleChange(date) {
      this.setState({
        startDate: date,
        localChange:true
      });
      this.props.onChange(date);
      console.log(date)
    }
   
    render() {
      return (
        <DatePicker 
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      );
    }
  }
class Category extends Component{
    constructor(props){
        super(props)

        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onChange(e.target.value)
    }
    render(){   
        return (
            <select onChange={this.handleChange}>
                 <option value="sport">sport</option>
                 <option value="muzyka">muzyka</option>
                 <option value="film">film</option>
                <option value="spotkanie">spotkanie</option>
                <option value="it">it</option>
            </select>
        )
    }
}

class Map extends Component{
    static defaultProps = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 8
      };
     
      render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{width:200, height:200}}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              options={{
                  zoomControl:false
              }}
            >
            <p
              
              lat={this.props.center.lat}
              lng={this.props.center.lng}
              text={'Event'}
              
            >
            </p>
            </GoogleMapReact>
          </div>
        );
      }
}

class Image extends Component{
    render(){
        return( <img  className={this.props.className} src={this.props.src} alt='no image' />
         )
    }
}


class ImageSwitcher extends Component{
    render(){
        return <input type='submit' value={this.props.name} onClick={this.props.handleClick}/>
    }
    
}

class MeakeButton extends Component{
render(){
    return(
        <div>
            <input type='submit' value={this.props.value} onClick={this.props.onClick} />
        </div>

    );
}

}



