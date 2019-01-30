import React, { Component } from 'react';
import {Suggest} from './autosuggest.js'


function formatDate(d){
        return JSON.stringify(d).substring(1,11)
}

 export class DisplayList extends Component{
    constructor(props){
        super(props)

        this.state={
            originalEventList:[],
            eventList:[],
            localChange: false
        }
        this.mutateList = this.mutateList.bind(this)
        this.sortListAlphabetically = this.sortListAlphabetically.bind(this)
        this.sortListByCategory = this.sortListByCategory.bind(this)
        this.sortListByDate = this.sortListByDate.bind(this)
        this.sortListByDistanceFrom= this.sortListByDistanceFrom.bind(this)
        //this.sortListByCategory = this.sortListByCategory.bind(this)
        //this.sortListByCategory = this.sortListByCategory.bind(this)
        //this.sortListByCategory = this.sortListByCategory.bind(this)

    }

    static getDerivedStateFromProps(props,state){
        if(state.localChange===true){
            return{localChange:false}
        }
        else{
            return {eventList:props.eventListArray,
                    originalEventList:props.eventListArray}
    }
    }
    
    getDataFromLocalStorage() {
        let searchListItems = []
            this.state.eventList.forEach(element => {
                searchListItems.push(<ListItem title={element.title}
                    onClick={this.props.handleEventChoise}
                    elementIndex = {this.props.eventListArray.indexOf(element)}
                    handleEventDeletion = {this.props.handleEventDeletion}
                    handleEventEdition = {this.props.handleEventEdition}
                    beginDate={formatDate(element.beginDate)}
                    categoty={element.category}/>)
            });
            return <div>{searchListItems}</div> 
        }
    mutateList(string){
        if(string!==''){
        let newEventList =[]
           this.props.eventListArray.forEach(element =>{
               if(element.title.includes(string)){
                   newEventList.push(element)
               }
               })
                this.setState({eventList: newEventList,
                               localChange: true })
           }
           else{
               this.setState({eventList: this.props.eventListArray})
           }
       }
    sortListAlphabetically(){
        let titleArray=[]

        let newEventList=[]
        this.state.eventList.forEach(element =>{
            titleArray.push(element.title)
        })
        console.log(titleArray)

        titleArray.sort()
        for(let i=0;i<titleArray.length;i++){
            for(let j=0;j<titleArray.length;j++){
                if(titleArray[i]===this.state.eventList[j].title)
                    newEventList.push(this.state.eventList[j])
            }
        }
        this.setState({eventList:newEventList,
        localChange:true})
        }
    sortListByCategory(){
        let newArray = this.state.eventList
        var arrayLength = newArray.length;
        do {
            for (let i = 0; i < arrayLength - 1; i++) {
                if (newArray[i].category[0] > newArray[i + 1].category[0]) {
                    let temp = newArray[i]
                    newArray[i] = newArray[i+1]
                    newArray[i+1]=temp
                }
            }
            arrayLength = arrayLength - 1;
        }
        while (arrayLength > 1)
        this.setState({eventList:newArray,
            localChange:true})
    }
    sortListByDate(){
        let newArray = this.state.eventList
        var arrayLength = newArray.length;
        do {
            for (let i = 0; i < arrayLength - 1; i++) {
                if (newArray[i].beginDate > newArray[i + 1].beginDate) {
                    let temp = newArray[i]
                    newArray[i] = newArray[i+1]
                    newArray[i+1]=temp
                }
            }
            arrayLength = arrayLength - 1;
        }
        while (arrayLength > 1)
        this.setState({eventList:newArray,
            localChange:true})
    }
    sortListByDistanceFrom(){
        let events = this.state.originalEventList
        let place ={lat: 50.2974884, lng: 18.95457280000005}
        let distancesArray =[];
        events.forEach(event=>{
            distancesArray.push({
                name: event.title,
                distance: Math.sqrt(Math.pow(place.lat-event.eventPlace.lat,2)+Math.cos(event.eventPlace.lat*Math.PI/108)*Math.pow(place.lng-event.eventPlace.lng,2))*40075.704/360
            })  
            distancesArray.sort(function(a,b){
                return a.distance-b.distance
            })
            console.log(distancesArray);
        })   
    }
        
    render(){
        return(<div style={{display: 'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <div style={{
                display:'flex',
                flexDirection:'row',
                width:'80%',
                justifyContent: 'space-between',
                padding:'15,0,0,15'

            }}>
                <Suggest  
                eventListArray={this.props.eventListArray}
                            mutateList={this.mutateList}/>
                            <button onClick={this.sortListAlphabetically} >Alfabetycznie</button>
                            <button onClick={this.sortListByCategory} >katogoria</button>
                            <button onClick={this.sortListByDate} >data</button>
                            <button onClick={this.sortListByDistanceFrom} >dystans</button>


                            </div>
                <div style={DisplayEventStyles} >
                 {this.getDataFromLocalStorage()}
                </div>
                
        </div>
        )
    }
}

class ListItem extends Component{
    constructor(props){
        super(props)
        this.state = ({style: ListItemStyles});
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);


      }
      handleClick(){
       this.props.onClick(this.props.elementIndex)
      }
      handleMouseEnter(){
        this.setState({style: ListItemStylesClicked});
      }
      handleMouseLeave(){
        this.setState({style: ListItemStyles});
      }
      handleDeleteClick(){
        this.props.handleEventDeletion(this.props.elementIndex)
      }
      handleEditClick(){
          this.props.handleEventEdition(this.props.elementIndex)
      }
      
      render () {
        return (
          <div >
            <div style={this.state.style} onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {this.props.title}<br/>
                {this.props.beginDate} <br/>
                {this.props.categoty} <br/>
                moj index to {this.props.elementIndex}
            </div>
            <div  style={{padding:5,height:50,display:'flex', justifyContent: 'space-between'}}>
            <button style={{padding:5,margin: 5,height:'36px',width:100}} onClick={this.handleEditClick}>Edit</button>
            <button style={{padding:5,margin: 5,height:'36px',width: 100}} onClick={this.handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

}

let ListItemStyles= {
    background: 'white',
    padding:15,
    border:'solid',
     borderWidth: '2',display:'flex',
     width:'30vw',
     justifyContent: 'space-between'
}
let ListItemStylesClicked= {
    background: 'grey',
    padding:15,
    border:'solid',
     borderWidth: '2',display:'flex',
     width:'30vw',
     justifyContent: 'space-between'
}
let DisplayEventStyles = {
    width:'49vw',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px',
    justifyContent: 'center'
}



