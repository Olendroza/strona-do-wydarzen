import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styles from './displayEvent.css'
import { Grid } from '@material-ui/core';


function formatDate(d){
    return d.substring(0,10)
}

export class DisplayEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
        imageVisibility: false,
        title: 'No Title',
        organizer: 'no organizer',
        beginDate: Date.now().toString(),
        endDate: Date.now().toString(),
        category: '---',
        eventPlace: {lat: 0, lng:0},
        desc: '---',
        imgSrc:'',
    }
        this.handleImageSwitch = this.handleImageSwitch.bind(this);
        //this.changeDispalyedEvent = this.changeDispalyedEvent.bind(this);
    }

    

    static getDerivedStateFromProps(props,state){
        if(state.localChange)
            return ({localChange:false})
        else{
            if(props.displayedEvent){
                return props.displayedEvent
            }
            return {
                imageVisibility: true,
                title: 'No Title',
                organizer: 'no organizer',
                beginDate: Date.now().toString(),
                endDate: Date.now().toString(),
                category: '---',
                eventPlace: {lat: 0, lng:0},
                desc: '---',
                imgSrc:'',
            }
        }
    }
    
    handleImageSwitch(){
     this.setState({imageVisibility: !this.state.imageVisibility,
    localChange:true});

    }
    render(){
        return(
            
            <div className='container'>

            <Grid container >
            <Grid   item xs={12}><h1>{this.state.title}</h1> </Grid>
            <Grid  container item xs={3}>
                <Grid container>
                <Grid item>Miejsce</Grid>
                <Grid item><Image  className='image'    src = {this.state.imgSrc}/></Grid>
                </Grid>
            </Grid>
            <Grid container style={{flexDirection:'column'}}item xs={6}>
            <Grid item xs><Organizer  organizer={this.state.organizer}/>
            <Category category={this.state.category}/>
            <EventDate  begin={formatDate(this.state.beginDate)} end={formatDate(this.state.endDate)}/>
            </Grid>
            <Grid item xs> Opis wydarzenia: <br/><Description  description={this.state.desc}/> </Grid>
             </Grid>
            <Grid container item xs={3}>
            <Grid item>Miejsce</Grid>
            <Grid item><Map  className='map'center={this.state.eventPlace} title={this.state.title}/></Grid>
                
             </Grid>
            </Grid>
            </div>
        );
    }
}





class Title extends Component{ 
    render(){
        return <p className={this.props.className}>{this.props.name}</p> 
    }
}

class Organizer extends Component{
    render(){
        return <p style={{ marginRight:10}}> Organizatorem jest {this.props.organizer}</p>
    }
}
class Category extends Component{
    render(){
        return <p style={{ marginRight:10}}> Kategoria to {this.props.category}</p>
    }
}
class EventDate extends Component{
    render(){
        return <p style={{ marginRight:10}}>Od {this.props.begin} do {this.props.end}</p>
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
        return <img  className={this.props.className} src={this.props.src}/>
    }
}

class Description extends Component {
    render(){
        return(
        <div style={{
            wordBreak: 'break-word'}}>
            <p> {this.props.description}</p>
        </div>
        )
    }
}
class ImageSwitcher extends Component{
    render(){
        return <input type='submit' value={this.props.name} onClick={this.props.handleClick}/>
    }
    
}






 
