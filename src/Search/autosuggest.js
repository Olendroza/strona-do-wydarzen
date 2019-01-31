import React from 'react';
import Autosuggest from 'react-autosuggest';

  // function escapeRegexCharacters(str) {
  //  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  //}
  
  //function getSuggestions(value,eventNames) {
  //  const escapedValue = escapeRegexCharacters(value.trim());
  //  
  //  if (escapedValue === '') {
  //    return [];
  //  }
  //
  //  const regex = new RegExp('^' + escapedValue, 'i');
  //
  //  return eventNames.filter(eventNames => regex.test(eventNames.name));
  //}
  
  function getSuggestionValue(suggestion) {
    console.log('Tu pobieram sugestje')

    return suggestion.name;
  }
  
  function renderSuggestion() {
    console.log('')
  }
  
  export class Suggest extends React.Component {
    constructor() {
      super();
  
      this.state = {
        value: '',
        suggestions: [],
        eventNames:[]
      };    
    }
    static getDerivedStateFromProps(props){
        let array =[]
        for(let i=0;i<props.eventListArray.length;i++){
           array.push({name:props.eventListArray[i].title})
        }
        return({eventNames:array})
    }
    onChange = (event, { newValue, method }) => {
      this.setState({
        value: newValue
      });
      this.props.mutateList(newValue)
    };
    
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: []
      });
    };
  
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };
  
    render() {
      const { value, suggestions } = this.state;
      const inputProps = {
        placeholder: "Wyszukaj po nazwie",
        value,
        onChange: this.onChange
      };
  
      return (
        <Autosuggest 
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      );
    }
  }
  
  