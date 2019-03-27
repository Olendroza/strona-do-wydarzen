import React, { Component } from 'react';
import {DisplayEvent} from './DisplayEvent/displayEvent';
import MeakeEvent from './MeakeEvent/meakeEvent';
import {DisplayList} from './Search/search'
import {MainPageComponent} from './mainPageComponent/mainPageComponent';


import { withStyles } from '@material-ui/core/styles';

import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function findAvibleName(eventList,eventTitle){
  let eventListTileArray =[]
  let repetitingTitleArray=[]
  let numberArray =[]
  eventList.forEach(element => {
    eventListTileArray.push(element.title) //get title array
  });
  eventListTileArray.forEach(element=>{
    if(element.includes(eventTitle))
      repetitingTitleArray.push(element)    //get arraay made only of strings contain eventTtile
  }) 
  if(repetitingTitleArray.length!==0){
    repetitingTitleArray.splice(eventListTileArray.indexOf(eventTitle),1) //get rid of evemtTitle
    if(repetitingTitleArray.length!==0){
      repetitingTitleArray.forEach(element=>{
        numberArray.push(parseInt(element.substring(eventTitle.length+1)))   //remove prefix and # sign
      })
      numberArray.sort((a,b)=>{return a-b})   //sort number array
      let found=false
      let i=0
      while(found===false){
        i++
        found=true
        numberArray.forEach(number=>{
          if(number===i)
            found =false
        })  
      }
      return('#'+i)
    }
    else  
      return '#1'
  }
  else
    return ''


}

class App extends Component {
  constructor(props){
    super(props) 

      this.state= {
        rightBoxContent: 'homepage',
        displayedEvent:0,
        editingEvent: '',
        eventListArray:[],
        listInitialSorting:0,
        //material ui
        spacing: '16',
      };

    
    this.handleCreateEventClick=this.handleCreateEventClick.bind(this)
    this.handleDisplayEvents=this.handleDisplayEvents.bind(this)
    this.displayedEvent=this.handleDisplayEventChoise.bind(this)
    this.handleEventDeletion=this.handleEventDeletion.bind(this)
    this.handleEventCreation=this.handleEventCreation.bind(this)
    this.handleEventEdition=this.handleEventEdition.bind(this)
    this.handleEventSave=this.handleEventSave.bind(this)
    this.handleDisplayList=this.handleDisplayList.bind(this)



    this.handleInintialSortingChoise = this.handleInintialSortingChoise.bind(this);
    this.getEventListFromServer = this.getEventListFromServer.bind(this)

  }

  componentDidMount(){
    this.getEventListFromServer()
  }
  //server
  getEventListFromServer(){
    fetch('/eventStorage')
      .then(res=>res.json())
      .then(res=>{
          this.setState({eventListArray:res.message})

      })
      .catch(err=>{console.log(err)})


  }
  sendObjectToServer(obj,editionFlag){
    fetch('/users',{method:'POST',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        event:obj,
        flag:editionFlag
    })
  })
    .then(()=>{this.getEventListFromServer()})
    .catch((err)=>console.log(err))
  }
  //
  
  handleEventCreation(event){
    let eventArray = this.state.eventListArray;
      if(event.editionMode===true){
        eventArray.splice(eventArray.indexOf(event),1)
        console.log(eventArray)
      }
      event.title = event.title+findAvibleName(eventArray,event.title)
      this.sendObjectToServer(event,-1)
      this.handleDisplayEventChoise(this.state.eventListArray.length)

     }
  handleEventDeletion (n){
    console.log('usuwam'+n)
    this.sendObjectToServer(n,-2)
  }
  handleEventEdition(n){
    let editingEvent = this.state.eventListArray[n]
    editingEvent.editionMode  = true
    editingEvent.index = n

    this.setState({editingEvent: editingEvent,
                    rightBoxContent:'createEvent'})
  }
  handleEventSave(event,n){
    let eventArray = this.state.eventListArray
    eventArray[n]=event
    if(event.editionMode===true){
      eventArray.splice(eventArray.indexOf(event),1)
      console.log(eventArray)
    }
    
    event.title = event.title+findAvibleName(eventArray,event.title)
    this.sendObjectToServer(event,n)
    this.handleDisplayEventChoise(n)
  }
  handleDisplayEventChoise=(n)=>{
    console.log('diplayed n:' +n)

    if(n===-1)
      n=0
    this.setState({rightBoxContent:'displayEvent'})
     this.setState({displayedEvent: n});
  }
  handleCreateEventClick=()=>{
      this.setState({editingEvent: defaultEvent,
                    rightBoxContent:'createEvent'})
  }
  handleDisplayEvents(){
    this.setState({rightBoxContent:'list',
                    listInitialSorting:2
    })
  }
  handleDisplayList(){
    this.setState({rightBoxContent: 'list'})
  }
  handleInintialSortingChoise(choise,lat,lng){
    this.setState({rightBoxContent: 'list',
                    listInitialSorting:choise,
                    searchingPlace: {lat:lat,lng:lng}
                    })
  }
  
   


  
  render() {
     
    let meakeEventBlock = <MeakeEvent handleEventCreation={this.handleEventCreation}
                          handleEventSave={this.handleEventSave}
                          view={this.state.view}
                          editingEvent={this.state.editingEvent}
                          />
    let displayEventBlock = <DisplayEvent displayedEvent={this.state.eventListArray[this.state.displayedEvent]}
                              /> 
    let eventListBlock = <DisplayList eventListArray={this.state.eventListArray}  lista wydarzen
                          handleEventDeletion = {this.handleEventDeletion}
                            handleEventChoise={this.handleDisplayEventChoise}
                            handleEventEdition={this.handleEventEdition}
                            initialSorting = {this.state.listInitialSorting}
                            searchingPlace = {this.state.searchingPlace}
                            showButtons={false}
                          />
    let mainPageComponentBlock = <MainPageComponent handleSelect={this.handleInintialSortingChoise}/>
    let rightBoxContent

    switch(this.state.rightBoxContent){
      case 'homepage': 
            rightBoxContent=mainPageComponentBlock 
            break;
      case 'list':
            rightBoxContent=eventListBlock
            break;
      case 'createEvent':
            rightBoxContent=meakeEventBlock;
            break;
      case 'displayEvent':
            rightBoxContent=displayEventBlock;
            break;


    }

    const { classes } = this.props;
    return (
       
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static"  className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" component="h1" gutterBottom color="inherit" noWrap className={classes.toolbarTitle}>
              <CameraIcon className={classes.icon} />
              Wydarzenia
            </Typography>
            <NavButtons  
                className='navBar'
                onCreateEventClick={this.handleCreateEventClick}
                 onDisplayEventClick = {this.handleDisplayEvents}
                 onDisplayListClick = {this.handleDisplayList}
                 view = {this.state.view}
          />
          </Toolbar>
        </AppBar>
        <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Znajdź wydarzenia najbliżej <br/> Ciebie
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              
              {rightBoxContent} 
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
         
        </div>
      </main>
        </div>

    );
  }
}
const styles = theme => ({
  root: {
    flexGrow: 1,
    flexDirection: 'column',
    
  },
  appBar: {
    position: 'relative',
    
  },
  toolbarTitle: {
    flex: 1,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit:{
    padding: theme.spacing.unit * 4
  }
});

class NavButtons extends Component{

  render () {
    let ButtonNames = ['Nowe Wydarzenie','Wyświetl wydarzenie','Lista wydarzeń'];
    return (
      <div className={this.props.className}>
        <div className='buttonsStyle'>
          <MenuButton name={ButtonNames[0]} handleClick={this.props.onCreateEventClick} />
          <MenuButton name={ButtonNames[1]} handleClick={this.props.onDisplayEventClick}/>
                
        </div>
      </div>
    );
  }
}
class MenuButton extends Component {
  render () {
    return (
      <Button style={{margin:8}} color="inherit" variant="outlined" onClick={this.props.handleClick}>
        {this.props.name}
      </Button>
    );
  }
}

let defaultEvent ={imageVisibility: true,
  title: 'Add your title',
  organizer: 'Add Organizer',
  beginDate: new Date() ,
  endDate:new Date()  ,
  category: 'sport',
  eventPlace: {lat: 0, lng:0},
  desc: 'Add decryption',
  imgSrc:'Add image source',
  editionMode:false,
  index: 0
  }
export default withStyles(styles)(App);