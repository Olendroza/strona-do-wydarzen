import React, { Component } from 'react';
import {DisplayEvent} from './DisplayEvent/displayEvent';
import {MeakeEvent} from './MeakeEvent/meakeEvent';
import {DisplayList} from './Search/search'
import {MainPageComponent} from './mainPageComponent/mainPageComponent'
import styles from './App.css'

function findSameNames(array,s){
  let ar =[]
  
  for(let i=0;i<array.length;i++){
      if(array[i].includes(s))
          ar.push(array[i])
  }
  if(ar.length===0)
      return ''
  if(ar.length===1)
      return '#2'
  else{
    console.log('jestem w elsie')
    let numbersArray =[]
      for(let i=0;i<ar.length;i++){
        if(ar[i]===s)
          ar.splice(i,1)
      }
      
      ar.forEach(element=>{
        numbersArray.push(element[element.length-1])
      })
      return '#'+(Math.max.apply(null,numbersArray)+1)

  }
      
}


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
        view:1,    //0-normal view, 1- width<=600px,
        wiadomosciZSerwera:[]
      };
    }
    else{
      this.state= {
        rightBoxContent: 'homepage',
        updateList: false,
        displayedEvent:0,
        editingEvent: '',
        eventListArray:[],
        isEventListVisible:true,
        view:0,    //0-normal view, 1- width<=600px
        listInitialSorting:0
      };
    }
    
    
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


  componentWillMount(){
  }
  componentDidMount(){
    fetch('/eventStorage')
      .then(res=>res.json())
      .then(res=>{
        if(res.message!=='')
        this.setState({eventListArray:res.message})
      })
      .catch(err=>{console.log(err)})
  }

  //server
  getEventListFromServer(){
    fetch('/eventStorage')
      .then(res=>res.json())
      .then(res=>{
        console.log(res.message)
          this.setState({eventListArray:res.message})
      })
      .then(console.log(this.state.eventListArray))
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
    .then(console.log('send')).then(this.getEventListFromServer())
  }
  //
  
  handleEventCreation(event){
     let eventList = this.state.eventListArray
      let titleArray =[]
    for(let i=0;i<eventList.length;i++)
    {
      titleArray.push(eventList[i].title)
    }
    event.title=event.title+findSameNames(titleArray,event.title)
    eventList.push(event)

       
      this.sendObjectToServer(event,-1)
      this.setState({eventListArray:eventList})

      this.handleDisplayEventChoise(eventList.length-1)

     }

  handleEventDeletion (n){
   
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
    console.log('n to' +n)
    let eventArray = this.state.eventListArray
    eventArray[n]=event
    this.sendObjectToServer(event,n)

    this.setState({eventListArray:eventArray})
    this.handleDisplayEventChoise(n)
  }
  handleDisplayEventChoise=(n)=>{
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
    console.log(choise)

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
    let displayEventBlock = <DisplayEvent displayedEvent={this.state.displayedEvent}
                              view={this.state.view}
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

    return (
      <div style={{width: '99vw'}} >
        <div className='appContainer'>
        <TopBar  
                className='navBar'
                onCreateEventClick={this.handleCreateEventClick}
                 onDisplayEventClick = {this.handleDisplayEvents}
                 onDisplayListClick = {this.handleDisplayList}
                 view = {this.state.view}
         />
        <div className='leftContent'>jestem wiadomoscia z serwera: {this.state.wiadomosciZSerwera}
          <button > eventlength {this.state.eventListArray.length} </button> 
        </div>
        <div className='rightContent'>
          {rightBoxContent}
        </div>
        </div>
        <div>
          
          </div>
      </div>
    );
  }
}

class TopBar extends Component{

  render () {
    let ButtonNames = ['Nowe Wydarzenie','Wyświetl wydarzenie','Lista wydarzeń'];
    return (
      <div className={this.props.className}>
      <div className='navBarName'> <h1>Strona Do Wydarzeń</h1></div>

        <div className='buttonsContainer'>
          <MenuButton name={ButtonNames[0]} handleClick={this.props.onCreateEventClick} />
          <MenuButton name={ButtonNames[1]} handleClick={this.props.onDisplayEventClick}/>
          { this.props.view===1 ?
            <MenuButton name={ButtonNames[2]} handleClick={this.props.onDisplayListClick}/>:
            <p></p>
          }
       
        </div>
      </div>
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


let MenuButtonStyles  = {
  padding: '0.5vh',
  background : 'red',
  opacity : '0.5',
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