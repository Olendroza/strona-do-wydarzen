import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {LocationSearchInput} from './locationSuggest.js'


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

            style : normalViewStyles
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
              let styles;
              let imgSrc
            if(props.view===0)
                styles = normalViewStyles
            else
                styles = smallScreenViewStyles



            if(props.editingEvent.imgSrc==='Add image source'){
                imgSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png'
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
            style: styles
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
            s='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png' 
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
            <div style={this.state.style.DisplayEventStyles}>
                <div style={this.state.style.upperBox}> 
                  <AddTextData hei='5vh'style={this.state.style.TitleStyles} name={this.state.title} onSubmit={this.handleTitleSubmission}/>
                  <div>
                    <AddTextData style={this.state.style.TitleStyles} name={this.state.organizer} onSubmit={this.handleOrganizerSubmission}/>
                    Kategoria <Category onChange={this.handleCategoryChange}/> <br/>
                    Od <PickDate onChange={this.handleBeginDateChange} date={this.state.beginDate}/>  do <PickDate onChange={this.handleEndDateChange}date={this.state.endDate}/>
                  </div>

                  
                </div>
                <div style={this.state.style.bottomBox}>
                    <div style={{ width:'100vw'}}>
                            {
                            this.state.imageVisibility
                            ?
                                <Image src = {this.state.imgSrc}/>
                                : <Map center={this.props.eventPlace} title={this.props.title}/>
                            }
                            <AddTextData style={this.state.style.TitleStyles} name={this.state.imgSrc} onSubmit={this.handleImgSrcSubmission}/>     
                                <LocationSearchInput
                                handleSelect={this.handleLocationSelect} 
                                value={'Chorzów'}
                                onChange={value => this.setState({ value })}/> 
                    </div>
                    
                    <div style={{width: '100vw'}}>   
                        <AddTextData hei='35vh' style={this.state.style.DescriptionStyles} name={this.state.desc} onSubmit={this.handleDescSubmission}/>
                    </div>
                    </div>
                    {
                                this.state.editionMode?
                                <MeakeButton style={{alignSelf:'flex-end'}} onClick={this.handleEventSave} value='Save event'/>
                                :
                                <MeakeButton style={{alignSelf:'flex-end'}} onClick={this.handleMeakeEventSubmisson} value='Meake event'/>
                            }
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
            <form style={{display:'flex', justifyContent:'center'}} onBlur={this.handleSumbit}>
                <textarea style={{height:this.props.hei,wordBreak: 'break-word' ,width: '70%', margin:10}} 
                type='text'
                value={this.state.value}
                onChange={this.handleChange}
                onClick={this.handleClick}/>
            </form>
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
          <div style={this.state.style.MapStyles}>
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
        return( <div><img  width='200px' height='200px' src={this.props.src} alt='no image' />
        </div> )
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


let normalViewStyles ={
    DisplayEventStyles : {
        width:'49vw',
        maxHeight:'600px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    TitleStyles:{
        wordBreak: 'break-all',
        width: '30vw',
    },

    MapStyles:{
        height: '200px',
        width: '300px',
        padding: 15
    },
    DescriptionStyles:{
        padding: 15,
        wordBreak: 'break-word',
        background: 'white'
    },
    upperBox:{
        width:'50vw', 
        flexWrap : 'wrap', 
        display:'flex',
        justifyContent:'space-between' 
    },
    bottomBox:{
        display:'flex',
        width:'100%', 
    }
}

let smallScreenViewStyles ={
    DisplayEventStyles : {
        width:'100vw',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        
    },
    TitleStyles:{
        wordBreak: 'break-all',
        width: '30vw',
    },

    MapStyles:{
        height: '200px',
        width: '300px',
        padding: 15
    },
    DescriptionStyles:{
        padding: 15,
        wordBreak: 'break-word',
        background: 'white',
        width: '100%'
    },
    upperBox:{
        width:'100vw',
        flexWrap : 'wrap', 
        display:'flex',
        justifyContent:'space-between',
    },
    bottomBox:{
        display:'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%', 
        background:'red'
    }
}


