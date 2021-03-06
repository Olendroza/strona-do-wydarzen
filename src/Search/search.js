import React, { Component } from 'react';
import {Suggest} from './autosuggest.js'
import styles from './search.css'
import Button from '@material-ui/core/Button';


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

    componentDidMount(){
        switch(this.props.initialSorting){
            case 0:
                this.sortListByDistanceFrom(this.props.searchingPlace)
                break;
            case 1: 
                this.sortListAlphabetically()
                break;
            case 2:
                this.sortListByCategory()
                break;
            case 3:
                this.sortListByDate();
                break;
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
                    imgSrc={element.imgSrc}
                    categoty={element.category}/>)
            });
            return <div className='eventContainer'>{searchListItems}</div> 
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
    sortListByDistanceFrom(place){
        let events = this.state.originalEventList
        let distancesArray =[];
        let finalList =[]
        events.forEach(event=>{
            distancesArray.push({
                name: event.title,
                distance: Math.sqrt(Math.pow(place.lat-event.eventPlace.lat,2)+Math.cos(event.eventPlace.lat*Math.PI/108)*Math.pow(place.lng-event.eventPlace.lng,2))*40075.704/360
            })  
            distancesArray.sort(function(a,b){
                return a.distance-b.distance
            })
        })
        distancesArray.forEach((distance)=>{
            events.forEach((e)=>{
                if(distance.name===e.title)
                    finalList.push(e)
            })
        })
        this.setState({eventList:finalList,
            localChange:true})  
    }
        
    render(){
        return(
        <div className='container'>
            <div className='topArea'>
                <Suggest  
                    eventListArray={this.props.eventListArray}
                    mutateList={this.mutateList}/>
                            {
                                this.props.showButtons ? 
                                <div><Button onClick={this.sortListAlphabetically} >Alfabetycznie</Button>
                                <Button onClick={this.sortListByCategory} >katogoria</Button>
                                <Button onClick={this.sortListByDate} >data</Button>
                                </div>
                                : <div></div>
                            } 
                            Bądź sortuj wg: <Button onClick={this.sortListAlphabetically}>Alfabetu</Button> 
                            <Button onClick={this.sortListByCategory}>kategorii</Button> 
                            <Button onClick={this.sortListByDate}>daty</Button> 

                            </div>
                 {this.getDataFromLocalStorage()}
                
        </div>
        )
    }
}

class ListItem extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);


      }
      handleClick(){
       this.props.onClick(this.props.elementIndex)
      }
      handleDeleteClick(){
        this.props.handleEventDeletion(this.props.elementIndex)
      }
      handleEditClick(){
          this.props.handleEventEdition(this.props.elementIndex)
      }
      
      render () {
        return (
          <div className='listItem' style={{backgroundImage: "url("+this.props.imgSrc+")"}}>
            <div  className='listItemContent'  onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
            <div onClick={this.handleClick}>
                {this.props.title}<br/>
                {this.props.beginDate} <br/>
                {this.props.categoty} <br/>
            </div>
            <div className='listItemButtons' >
            <Button  onClick={this.handleEditClick}>Edit</Button>
            <Button  onClick={this.handleDeleteClick}>Delete</Button>
            </div>
            </div>
        </div>
    )
}
}






