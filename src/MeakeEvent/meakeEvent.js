import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "react-datepicker/dist/react-datepicker.css";
import {LocationSearchInput} from './locationSuggest.js'


import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';




function formatDate(d){
    return d.substring(0,10)
}

 class MeakeEvent extends Component{
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
        console.log('lat'+lat)
        this.setState({eventPlace:{
            lat: lat,
            lng: lng
        },
        localChange:true})
        console.log('a')
        
    }
        
    render(){
        const { classes } = this.props;
        return(

            <div style={{flexGrow:1}}>
            
                <Grid container >
                <Grid className={classes.title} item xs={12}>
                <h1>Nowe wydarzenie</h1>
                </Grid >
                <Grid  className={classes.smallGridItems} item xs={3}>Tytuł: </Grid>
                <Grid  className={classes.smallGridItems} item xs={3}> <AddTextData name={this.state.title} onSubmit={this.handleTitleSubmission}/></Grid>

                <Grid  className={classes.smallGridItems}  item xs={3}>Organizator:</Grid>
                <Grid  className={classes.smallGridItems} item xs={3}><AddTextData  name={this.state.organizer} onSubmit={this.handleOrganizerSubmission}/></Grid>

                <Grid  className={classes.smallGridItems} item xs={3}>Data rozpoczęcia: </Grid>
                <Grid  className={classes.smallGridItems} item xs={3}><PickDate onChange={this.handleBeginDateChange} date={this.state.beginDate}/></Grid>

                <Grid  className={classes.smallGridItems} item xs={3}>Data zakończenia:</Grid>
                <Grid  className={classes.smallGridItems} item xs={3}><PickDate onChange={this.handleEndDateChange}date={this.state.endDate}/></Grid>

                <Grid  className={classes.smallGridItems} item xs={3}>Adres obrazu:</Grid>
                <Grid  className={classes.smallGridItems} item xs={3}><AddTextData className='imgUrlInput' name={this.state.imgSrc} onSubmit={this.handleImgSrcSubmission}/></Grid>

                <Grid  className={classes.smallGridItems} item xs={3}> Kategoria </Grid>
                <Grid  className={classes.smallGridItems} item xs={3}><Category onChange={this.handleCategoryChange}/></Grid>
            </Grid>
            <Grid container direction="row"
                
                alignItems="center" > 
            <Grid  item xs={4}><Image className='image'src = {this.state.imgSrc}/> </Grid>
            <Grid  item xs={4}>Opis: <AddTextData className={classes.descStyles}  name={this.state.desc} onSubmit={this.handleDescSubmission}/>
            Wybierz miejsce wydarzenia:
            <LocationSearchInput handleSelect={this.handleLocationSelect} 
                                 value={'Chorzów'}
                                 onChange={value => this.setState({ value })}
                                 handleSelect={(lat,lng)=>this.handleLocationSelect(lat,lng)}/> </Grid>
            <Grid  item xs={4}><Map  className='mapContainer'center={this.state.eventPlace} title={this.state.title}/> </Grid>
            </Grid>
            {
                this.state.editionMode?
                <MeakeButton  onClick={this.handleEventSave} value='Save event'/>
                :
                <MeakeButton  onClick={this.handleMeakeEventSubmisson} value='Meake event'/>
            }
               
            </div>               
        );
    }
}

const stylesMeakeEvent = theme => ({
    descStyles: {
      width:400,
      height:300,
    },
    smallGridItems:{
        padding:12
    },
    title:{
        padding:12
    }
  });


class AddTextData extends Component{
    constructor(props){
        super(props);

        this.state={value: '',
                    localChange: false}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
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
    render(){
        return(
            <div  onBlur={this.handleSumbit}>
                <TextField  multiline 
                placeholder={this.props.name}
                className={this.props.className}
                type='text'
                
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
        <TextField 
         type="date"

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
            <Select style={{width:160}}onChange={this.handleChange}>
                 <option value="sport">sport</option>
                 <option value="muzyka">muzyka</option>
                 <option value="film">film</option>
                <option value="spotkanie">spotkanie</option>
                <option value="it">it</option>
            </Select>
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
          <div className={this.props.className}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAlUzSR6WlgbMUJHQ12p2_c0DegJ8bAMD4' }}
              center={this.props.center}
              defaultZoom={this.props.zoom}
              options={{
                  zoomControl:false
              }}
            >
            <p       
              lat={this.props.center.lat}
              lng={this.props.center.lng}             
            >
            <span style={{height: '5px',
                         width: '5px',
                         backgroundColor: 'red',
                        borderRadius: '50%',
                         display: 'inline-block'}}></span>
            {this.props.title}
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

class MeakeButton extends Component{
render(){
    return(
        <div>
            <input type='submit' value={this.props.value} onClick={this.props.onClick} />
        </div>

    );
}s

}


export default withStyles(stylesMeakeEvent)(MeakeEvent);

