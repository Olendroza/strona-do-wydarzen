import React, { Component } from 'react';
import {DisplayEvent} from './DisplayEvent/displayEvent';
import {MeakeEvent} from './MeakeEvent/meakeEvent';
import {DisplayList} from './Search/search'

class App extends Component {
  constructor(props){
    super(props) 
    if(window.innerWidth<600){
      this.state= {
        itemShown: 0,
        updateList: false,
        displayedEvent:0,
        editingEvent: '',
        eventListArray:[],
        isEventListVisible:true,
        view:1    //0-normal view, 1- width<=600px
      };
    }
    else{
      this.state= {
        itemShown: 0,   //0-display event, 1 event edition/creation, 2 display event list. If viev is 0 then only 0 and 1 is viable, becouse event list is alvays shown
        updateList: false,
        displayedEvent:0,
        editingEvent: '',
        eventListArray:[],
        isEventListVisible:true,
        view:0    //0-normal view, 1- width<=600px
      };
    }
    
    
    this.handleCreateEventClick=this.handleCreateEventClick.bind(this)
    this.handleDisplayEvents=this.handleDisplayEvents.bind(this)
    this.getEventListFromLocalStorage=this.getEventListFromLocalStorage.bind(this)
    this.displayedEvent=this.handleDisplayEventChoise.bind(this)
    this.handleEventDeletion=this.handleEventDeletion.bind(this)
    this.handleEventCreation=this.handleEventCreation.bind(this)
    this.handleEventEdition=this.handleEventEdition.bind(this)
    this.handleEventSave=this.handleEventSave.bind(this)
    this.handleDisplayList=this.handleDisplayList.bind(this)

    this.updateDimensions = this.updateDimensions.bind(this);

  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    if(window.outerWidth<800)
      {
        this.setState({view:1})
        this.setState({isEventListVisible:false})
      }
      else if (window.outerWidth>800)
      {
        if(this.state.itemShown===2)
            this.setState({itemShown:0})

        this.setState({view:0})
        this.setState({isEventListVisible:true})
      }
  }

  componentWillMount(){
  this.getEventListFromLocalStorage();
  }
  getEventListFromLocalStorage(){
    if(localStorage.getItem('numberOfEvents')===null)
      localStorage.setItem('numberOfEvents','0') 
      let storedEvents = [];
    for(let i=0;i<localStorage.getItem('numberOfEvents');i++)
        storedEvents.push(JSON.parse(localStorage.getItem('event'+i))); 

        this.setState({eventListArray: storedEvents})
      }
  
  handleEventCreation(event){
     let eventList = this.state.eventListArray
     eventList.push(event)
      this.setState({eventListArray:eventList})
      this.handleDisplayEventChoise(eventList.length-1)
     }

  handleEventDeletion (n){
    let numberOfEvents = localStorage.getItem('numberOfEvents')
    let storedEvents = this.state.eventListArray
    console.log('splajsowany index to '+n)
    storedEvents.splice(n,1)


    this.setState({eventListArray: storedEvents})
    if(n===0&&storedEvents.length!==0){
      this.setState({displayedEvent: 0})
    }
    else if(n===storedEvents.length){
      this.setState({displayedEvent: n-1})
    }
    console.log(storedEvents)
    //save localstoreage --> move it to on windows close
    localStorage.clear()
    localStorage.setItem('numberOfEvents', numberOfEvents-1)
    for(let i=0;i<numberOfEvents-1;i++){
      localStorage.setItem('event'+i,JSON.stringify(storedEvents[i]))
    }

  }
  handleEventEdition(n){
    let editingEvent = this.state.eventListArray[n]
    editingEvent.editionMode  = true
    editingEvent.index = n
    this.setState({editingEvent: editingEvent})
    this.setState({itemShown: 1 })
  }

  handleEventSave(event,n){
    console.log('n to' +n)
    let eventArray = this.state.eventListArray
    eventArray[n]=event
    this.setState({eventListArray:eventArray})
    this.handleDisplayEventChoise(n)
  }
  handleDisplayEventChoise=(n)=>{
    this.setState({itemShown: 0})
     this.setState({displayedEvent: n});
  }

  handleCreateEventClick=()=>{
      this.setState({editingEvent: defaultEvent,
        itemShown: 1})
  }
  handleDisplayEvents(){
    this.setState({itemShown: 0,
    })
  }
  handleDisplayList(){
    this.setState({itemShown: 2})
  }

   


  
  render() {
     
    let meakeEventBlock = <MeakeEvent handleEventCreation={this.handleEventCreation}
                          handleEventSave={this.handleEventSave}
                          view={this.state.view}
                          editingEvent={this.state.editingEvent}
                          />
    let displayEventBlock = <DisplayEvent displayedEvent={this.state.displayedEvent}
                             view={this.state.view}
                             /> 
    let eventListBlock = <DisplayList eventListArray={this.state.eventListArray}  lista wydarzen
                          handleEventDeletion = {this.handleEventDeletion}
                           handleEventChoise={this.handleDisplayEventChoise}
                           handleEventEdition={this.handleEventEdition}
                          />
    let middlePart
    if(this.state.view===0){
      if(this.state.itemShown===0){
        middlePart = <div style={{display:'flex'}}>
        {displayEventBlock}
        {eventListBlock}
       </div>
      }
      else{
        middlePart = <div style={{display:'flex'}}>
        {meakeEventBlock}
        {eventListBlock}
       </div>
      }
    }else{
      if(this.state.itemShown===0){
        middlePart = <div style={{display:'flex'}}>
        {displayEventBlock}
       </div>
      }
      else if(this.state.itemShown===1){
        middlePart = <div style={{display:'flex'}}>
        {meakeEventBlock}
       </div>
      }
      else{
        middlePart = <div style={{display:'flex',
        width:'100vw',
        flexDirection:'column',
        flexWrap: 'wrap',
        alignItems: 'center',
         justifyContent: 'center'}}>
        {eventListBlock}
       </div>
      }

    }

    
    return (
      <div style={{width: '99vw'}} >
        
        <TopBar  onCreateEventClick={this.handleCreateEventClick}
                 onDisplayEventClick = {this.handleDisplayEvents}
                 onDisplayListClick = {this.handleDisplayList}
                 view = {this.state.view}
         />
        {middlePart}
      </div>
    );
  }
}

class TopBar extends Component{

  render () {
    let ButtonNames = ['Nowe Wydarzenie','Wyświetl wydarzenie','Lista wydarzeń'];
    return (
      <nav style={TopBarStyles} >
      <h1 style={{float:'left'}}> Strona Do Wydarzeń</h1>
        <div style={{float:'right', padding : 3,}}>
        
          <MenuButton name={ButtonNames[0]} handleClick={this.props.onCreateEventClick} />
          <MenuButton name={ButtonNames[1]} handleClick={this.props.onDisplayEventClick}/>
          { this.props.view===1 ?
            <MenuButton name={ButtonNames[2]} handleClick={this.props.onDisplayListClick}/>:
            <p></p>
          }

        </div>
      </nav>
    );
  }
}

class MenuButton extends Component {
  constructor(props){
    super(props);
    this.state = ({style: MenuButtonStyles});
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleClick(){
    this.props.handleClick()
  }
  handleMouseEnter(){
    this.setState({style: MenuButtonHoveredStyles});
  }
  handleMouseLeave(){
    this.setState({style: MenuButtonStyles});
  }
  render () {
    return (
      <div style={this.state.style} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        {this.props.name}
      </div>
    );
  }
}
// styles/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let TopBarStyles ={
  backgroundImage : 'linear-gradient(to right,white,grey)',
  padding: 15,
  display :'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width  : '100%',
  height : 'auto',
}

let MenuButtonStyles  = {
  padding: '0.5vh',
  background : 'red',
  opacity : '0.5'
}
let MenuButtonHoveredStyles  = {
  padding: '0.5vh',
  background : 'blue',
  opacity : '0.5'
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
export default App;