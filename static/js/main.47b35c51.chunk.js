(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),l=a(20),s=a.n(l),r=(a(77),a(3)),o=a(4),c=a(6),h=a(5),d=a(7),u=a(2),v=a(31),g=a.n(v);function p(e){return e.substring(0,10)}var b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={imageVisibility:!1,title:"No Title",organizer:"no organizer",beginDate:Date.now().toString(),endDate:Date.now().toString(),category:"---",eventPlace:{lat:0,lng:0},desc:"---",imgSrc:"",style:k},a.handleImageSwitch=a.handleImageSwitch.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleImageSwitch",value:function(){this.setState({imageVisibility:!this.state.imageVisibility,localChange:!0})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:this.state.style.DisplayEventStyles},i.a.createElement("div",{style:this.state.style.upperBox},i.a.createElement(y,{style:this.state.style.TitleStyles,name:this.state.title}),i.a.createElement("div",null,i.a.createElement(m,{organizer:this.state.organizer}),i.a.createElement(f,{category:this.state.category}),i.a.createElement(E,{begin:p(this.state.beginDate),end:p(this.state.endDate)}))),i.a.createElement("div",{style:this.state.style.bottomBox},i.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"150px",height:"300px",padding:15}},i.a.createElement("div",{style:{height:"200px",width:"100%"}},this.state.imageVisibility?i.a.createElement(O,{center:this.state.eventPlace,title:this.state.title}):i.a.createElement(j,{src:this.state.imgSrc})),i.a.createElement(C,{style:{height:5},name:this.state.imageVisibility?"Mapa":"Obrazek",handleClick:this.handleImageSwitch})),i.a.createElement("div",{style:{paddingLeft:"50px"}},i.a.createElement(S,{description:this.state.desc})))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(t.localChange)return{localChange:!1};if(null!==JSON.parse(localStorage.getItem("event"+e.displayedEvent))){var a,n=JSON.parse(localStorage.getItem("event"+e.displayedEvent));return a=0===e.view?k:w,{imageVisibility:n.imageVisibility,title:n.title,organizer:n.organizer,beginDate:n.beginDate,endDate:n.endDate,category:n.category,eventPlace:n.eventPlace,desc:n.desc,imgSrc:n.imgSrc,style:a}}return{imageVisibility:!0,title:"No Title",organizer:"no organizer",beginDate:Date.now().toString(),endDate:Date.now().toString(),category:"---",eventPlace:{lat:0,lng:0},desc:"---",imgSrc:"",style:k}}}]),t}(n.Component),y=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("h1",{style:{wordBreak:"break-all",width:"30vw"}},this.props.name)}}]),t}(n.Component),m=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("p",{style:{marginRight:10}}," Organizatorem jest ",this.props.organizer)}}]),t}(n.Component),f=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("p",{style:{marginRight:10}}," Kategoria to ",this.props.category)}}]),t}(n.Component),E=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("p",{style:{marginRight:10}},"Od ",this.props.begin," do ",this.props.end)}}]),t}(n.Component),O=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{height:"200px",width:"200px"}},i.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyAlUzSR6WlgbMUJHQ12p2_c0DegJ8bAMD4"},center:this.props.center,defaultZoom:this.props.zoom,options:{zoomControl:!1}},i.a.createElement("p",{lat:this.props.center.lat,lng:this.props.center.lng},i.a.createElement("span",{style:{height:"5px",width:"5px",backgroundColor:"red",borderRadius:"50%",display:"inline-block"}}),this.props.title)))}}]),t}(n.Component);O.defaultProps={center:{lat:0,lng:0},zoom:8};var j=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("img",{width:"200px",height:"200px",src:this.props.src})}}]),t}(n.Component),S=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{wordBreak:"break-word"}},i.a.createElement("p",null," ",this.props.description))}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("input",{type:"submit",value:this.props.name,onClick:this.props.handleClick})}}]),t}(n.Component),k={DisplayEventStyles:{width:"49vw",display:"flex",flexWrap:"wrap",borderStyle:"solid",borderWidth:5},TitleStyles:{wordBreak:"break-all",width:"30vw"},DescriptionStyles:{padding:15,wordBreak:"break-word"},bottomBox:{display:"flex"}},w={DisplayEventStyles:{width:"100vw",flexDirection:"column",display:"flex",flexWrap:"wrap",borderStyle:"solid",borderWidth:5,alignItems:"center",justifyContent:"center"},TitleStyles:{wordBreak:"break-all",width:"30vw"},DescriptionStyles:{padding:15,wordBreak:"break-word"},bottomBox:{width:"200px",display:"flex",flexDirection:"column"},upperBox:{width:"50vw",flexWrap:"wrap",display:"flex",alignItems:"center",justifyContent:"center"}},D=a(71),x=(a(141),a(32)),L=a.n(x),z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){a.setState({address:e}),Object(x.geocodeByAddress)(e).then(function(e){return Object(x.getLatLng)(e[0])}).then(function(e){console.log("Success",e),a.props.handleSelect(e.lat,e.lng)}).catch(function(e){return console.error("Error",e)})},a.state={address:""},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(L.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,l=e.loading;return i.a.createElement("div",null,i.a.createElement("input",t({placeholder:"Search Places ...",className:"location-search-input"})),i.a.createElement("div",{className:"autocomplete-dropdown-container"},l&&i.a.createElement("div",null,"Loading..."),a.map(function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return i.a.createElement("div",n(e,{className:t,style:a}),i.a.createElement("span",null,e.description))})))})}}]),t}(i.a.Component);var A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={imageVisibility:!0,title:"Add your",organizer:"Add Organizer",beginDate:"",endDate:"",category:"sport",eventPlace:{lat:0,lng:0},desc:"Add decryption",imgSrc:"Add image source",editionMode:!1,localChange:!1,index:"",style:N},a.handleTitleSubmission=a.handleTitleSubmission.bind(Object(u.a)(Object(u.a)(a))),a.handleOrganizerSubmission=a.handleOrganizerSubmission.bind(Object(u.a)(Object(u.a)(a))),a.handleDescSubmission=a.handleDescSubmission.bind(Object(u.a)(Object(u.a)(a))),a.handleImgSrcSubmission=a.handleImgSrcSubmission.bind(Object(u.a)(Object(u.a)(a))),a.handleBeginDateChange=a.handleBeginDateChange.bind(Object(u.a)(Object(u.a)(a))),a.handleEndDateChange=a.handleEndDateChange.bind(Object(u.a)(Object(u.a)(a))),a.handleCategoryChange=a.handleCategoryChange.bind(Object(u.a)(Object(u.a)(a))),a.handleMeakeEventSubmisson=a.handleMeakeEventSubmisson.bind(Object(u.a)(Object(u.a)(a))),a.handleEventSave=a.handleEventSave.bind(Object(u.a)(Object(u.a)(a))),a.handleLocationSelect=a.handleLocationSelect.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleTitleSubmission",value:function(e){console.log(e),this.setState({title:e,localChange:!0})}},{key:"handleOrganizerSubmission",value:function(e){this.setState({organizer:e,localChange:!0})}},{key:"handleDescSubmission",value:function(e){this.setState({desc:e,localChange:!0})}},{key:"handleImgSrcSubmission",value:function(e){""===e&&(e="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png"),this.setState({imgSrc:e,localChange:!0})}},{key:"handleBeginDateChange",value:function(e){this.setState({beginDate:e,localChange:!0})}},{key:"handleEndDateChange",value:function(e){this.setState({endDate:e,localChange:!0})}},{key:"handleCategoryChange",value:function(e){this.setState({category:e,localChange:!0})}},{key:"handleEventSave",value:function(){localStorage.setItem("event"+this.state.index,JSON.stringify(this.state)),this.props.handleEventSave(this.state,this.state.index)}},{key:"handleMeakeEventSubmisson",value:function(){var e=localStorage.getItem("numberOfEvents");localStorage.setItem("event"+e,JSON.stringify(this.state)),localStorage.setItem("numberOfEvents",++e),this.props.handleEventCreation(this.state)}},{key:"handleLocationSelect",value:function(e,t){this.setState({eventPlace:{lat:e,lng:t},localChange:!0})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:this.state.style.DisplayEventStyles},i.a.createElement("div",{style:this.state.style.upperBox},i.a.createElement(M,{hei:"5vh",style:this.state.style.TitleStyles,name:this.state.title,onSubmit:this.handleTitleSubmission}),i.a.createElement("div",null,i.a.createElement(M,{style:this.state.style.TitleStyles,name:this.state.organizer,onSubmit:this.handleOrganizerSubmission}),"Kategoria ",i.a.createElement(I,{onChange:this.handleCategoryChange})," ",i.a.createElement("br",null),"Od ",i.a.createElement(B,{onChange:this.handleBeginDateChange,date:this.state.beginDate}),"  do ",i.a.createElement(B,{onChange:this.handleEndDateChange,date:this.state.endDate}))),i.a.createElement("div",{style:this.state.style.bottomBox},i.a.createElement("div",{style:{width:"100vw"}},this.state.imageVisibility?i.a.createElement(W,{src:this.state.imgSrc}):i.a.createElement(P,{center:this.props.eventPlace,title:this.props.title}),i.a.createElement(M,{style:this.state.style.TitleStyles,name:this.state.imgSrc,onSubmit:this.handleImgSrcSubmission}),i.a.createElement(z,{handleSelect:this.handleLocationSelect,value:"Chorz\xf3w",onChange:function(t){return e.setState({value:t})}})),i.a.createElement("div",{style:{width:"100vw"}},i.a.createElement(M,{hei:"35vh",style:this.state.style.DescriptionStyles,name:this.state.desc,onSubmit:this.handleDescSubmission}))),this.state.editionMode?i.a.createElement(V,{style:{alignSelf:"flex-end"},onClick:this.handleEventSave,value:"Save event"}):i.a.createElement(V,{style:{alignSelf:"flex-end"},onClick:this.handleMeakeEventSubmisson,value:"Meake event"}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.localChange?{localChange:!1}:(a=0===e.view?N:F,n="Add image source"===e.editingEvent.imgSrc?"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/No_image_3x4.svg/1280px-No_image_3x4.svg.png":e.editingEvent.imgSrc,{title:e.editingEvent.title,organizer:e.editingEvent.organizer,beginDate:e.editingEvent.beginDate,endDate:e.editingEvent.endDate,category:e.editingEvent.category,eventPlace:e.editingEvent.eventPlace,desc:e.editingEvent.desc,imgSrc:n,editionMode:e.editingEvent.editionMode,index:e.editingEvent.index,style:a});var a,n}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={value:"",localChange:!1},a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a.handleSumbit=a.handleSumbit.bind(Object(u.a)(Object(u.a)(a))),a.handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value,localChange:!0})}},{key:"handleSumbit",value:function(e){e.preventDefault(),this.props.onSubmit(this.state.value)}},{key:"handleClick",value:function(){this.setState({value:"",localChange:!0})}},{key:"render",value:function(){return i.a.createElement("form",{style:{display:"flex",justifyContent:"center"},onBlur:this.handleSumbit},i.a.createElement("textarea",{style:{height:this.props.hei,wordBreak:"break-word",width:"70%",margin:10},type:"text",value:this.state.value,onChange:this.handleChange,onClick:this.handleClick}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.localChange?{localchange:!1}:{value:e.name}}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={startDate:new Date(a.props.date),localChange:!1},a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({startDate:e,localChange:!0}),this.props.onChange(e),console.log(e)}},{key:"render",value:function(){return i.a.createElement(D.a,{selected:this.state.startDate,onChange:this.handleChange})}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.localChange?{localchange:!1}:{startDate:e.date}}}]),t}(i.a.Component),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){return i.a.createElement("select",{onChange:this.handleChange},i.a.createElement("option",{value:"sport"},"sport"),i.a.createElement("option",{value:"muzyka"},"muzyka"),i.a.createElement("option",{value:"film"},"film"),i.a.createElement("option",{value:"spotkanie"},"spotkanie"),i.a.createElement("option",{value:"it"},"it"))}}]),t}(n.Component),P=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:this.state.style.MapStyles},i.a.createElement(g.a,{bootstrapURLKeys:{key:"AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,options:{zoomControl:!1}},i.a.createElement("p",{lat:this.props.center.lat,lng:this.props.center.lng,text:"Event"})))}}]),t}(n.Component);P.defaultProps={center:{lat:0,lng:0},zoom:8};var W=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{width:"200px",height:"200px",src:this.props.src,alt:"no image"}))}}]),t}(n.Component),V=(n.Component,function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("input",{type:"submit",value:this.props.value,onClick:this.props.onClick}))}}]),t}(n.Component)),N={DisplayEventStyles:{width:"49vw",maxHeight:"600px",display:"flex",flexWrap:"wrap",justifyContent:"center"},TitleStyles:{wordBreak:"break-all",width:"30vw"},MapStyles:{height:"200px",width:"300px",padding:15},DescriptionStyles:{padding:15,wordBreak:"break-word",background:"white"},upperBox:{width:"50vw",flexWrap:"wrap",display:"flex",justifyContent:"space-between"},bottomBox:{display:"flex",width:"100%"}},F={DisplayEventStyles:{width:"100vw",display:"flex",flexWrap:"wrap",justifyContent:"center"},TitleStyles:{wordBreak:"break-all",width:"30vw"},MapStyles:{height:"200px",width:"300px",padding:15},DescriptionStyles:{padding:15,wordBreak:"break-word",background:"white",width:"100%"},upperBox:{width:"100vw",flexWrap:"wrap",display:"flex",justifyContent:"space-between"},bottomBox:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",background:"red"}},T=a(70),R=a.n(T);function J(e){return console.log("Tu pobieram sugestje"),e.name}function _(){console.log("")}var q=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).onChange=function(t,a){var n=a.newValue;a.method;e.setState({value:n}),e.props.mutateList(n)},e.onSuggestionsFetchRequested=function(t){t.value;e.setState({suggestions:[]})},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.state={value:"",suggestions:[],eventNames:[]},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.suggestions,n={placeholder:"Wyszukaj po nazwie",value:t,onChange:this.onChange};return i.a.createElement(R.a,{suggestions:a,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:J,renderSuggestion:_,inputProps:n})}}],[{key:"getDerivedStateFromProps",value:function(e){for(var t=[],a=0;a<e.eventListArray.length;a++)t.push({name:e.eventListArray[a].title});return{eventNames:t}}}]),t}(i.a.Component);var K=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={originalEventList:[],eventList:[],localChange:!1},a.mutateList=a.mutateList.bind(Object(u.a)(Object(u.a)(a))),a.sortListAlphabetically=a.sortListAlphabetically.bind(Object(u.a)(Object(u.a)(a))),a.sortListByCategory=a.sortListByCategory.bind(Object(u.a)(Object(u.a)(a))),a.sortListByDate=a.sortListByDate.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getDataFromLocalStorage",value:function(){var e=this,t=[];return this.state.eventList.forEach(function(a){var n;t.push(i.a.createElement(U,{title:a.title,onClick:e.props.handleEventChoise,elementIndex:e.props.eventListArray.indexOf(a),handleEventDeletion:e.props.handleEventDeletion,handleEventEdition:e.props.handleEventEdition,beginDate:(n=a.beginDate,JSON.stringify(n).substring(1,11)),categoty:a.category}))}),i.a.createElement("div",null,t)}},{key:"mutateList",value:function(e){if(""!==e){var t=[];this.props.eventListArray.forEach(function(a){a.title.includes(e)&&t.push(a)}),this.setState({eventList:t,localChange:!0})}else this.setState({eventList:this.props.eventListArray})}},{key:"sortListAlphabetically",value:function(){var e=[],t=[];this.state.eventList.forEach(function(t){e.push(t.title)}),console.log(e),e.sort();for(var a=0;a<e.length;a++)for(var n=0;n<e.length;n++)e[a]===this.state.eventList[n].title&&t.push(this.state.eventList[n]);this.setState({eventList:t,localChange:!0})}},{key:"sortListByCategory",value:function(){var e=this.state.eventList,t=e.length;do{for(var a=0;a<t-1;a++)if(e[a].category[0]>e[a+1].category[0]){var n=e[a];e[a]=e[a+1],e[a+1]=n}t-=1}while(t>1);this.setState({eventList:e,localChange:!0})}},{key:"sortListByDate",value:function(){var e=this.state.eventList,t=e.length;do{for(var a=0;a<t-1;a++)if(e[a].beginDate>e[a+1].beginDate){var n=e[a];e[a]=e[a+1],e[a+1]=n}t-=1}while(t>1);this.setState({eventList:e,localChange:!0})}},{key:"render",value:function(){return i.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}},i.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"80%",justifyContent:"space-between",padding:"15,0,0,15"}},i.a.createElement(q,{eventListArray:this.props.eventListArray,mutateList:this.mutateList}),i.a.createElement("button",{onClick:this.sortListAlphabetically},"Alfabetycznie"),i.a.createElement("button",{onClick:this.sortListByCategory},"katogoria"),i.a.createElement("button",{onClick:this.sortListByDate},"data")),i.a.createElement("div",{style:Z},this.getDataFromLocalStorage()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return!0===t.localChange?{localChange:!1}:{eventList:e.eventListArray,originalEventList:e.eventListArray}}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={style:H},a.handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a.handleMouseEnter=a.handleMouseEnter.bind(Object(u.a)(Object(u.a)(a))),a.handleMouseLeave=a.handleMouseLeave.bind(Object(u.a)(Object(u.a)(a))),a.handleDeleteClick=a.handleDeleteClick.bind(Object(u.a)(Object(u.a)(a))),a.handleEditClick=a.handleEditClick.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.props.onClick(this.props.elementIndex)}},{key:"handleMouseEnter",value:function(){this.setState({style:Q})}},{key:"handleMouseLeave",value:function(){this.setState({style:H})}},{key:"handleDeleteClick",value:function(){this.props.handleEventDeletion(this.props.elementIndex)}},{key:"handleEditClick",value:function(){this.props.handleEventEdition(this.props.elementIndex)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{style:this.state.style,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},this.props.title,i.a.createElement("br",null),this.props.beginDate," ",i.a.createElement("br",null),this.props.categoty," ",i.a.createElement("br",null),"moj index to ",this.props.elementIndex),i.a.createElement("div",{style:{padding:5,height:50,display:"flex",justifyContent:"space-between"}},i.a.createElement("button",{style:{padding:5,margin:5,height:"36px",width:100},onClick:this.handleEditClick},"Edit"),i.a.createElement("button",{style:{padding:5,margin:5,height:"36px",width:100},onClick:this.handleDeleteClick},"Delete")))}}]),t}(n.Component),H={background:"white",padding:15,border:"solid",borderWidth:"2",display:"flex",width:"30vw",justifyContent:"space-between"},Q={background:"grey",padding:15,border:"solid",borderWidth:"2",display:"flex",width:"30vw",justifyContent:"space-between"},Z={width:"49vw",display:"flex",flexWrap:"wrap",padding:"30px",justifyContent:"center"},X=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).handleDisplayEventChoise=function(e){a.setState({itemShown:0}),a.setState({displayedEvent:e})},a.handleCreateEventClick=function(){a.setState({editingEvent:ae,itemShown:1})},window.innerWidth<600?a.state={itemShown:0,updateList:!1,displayedEvent:0,editingEvent:"",eventListArray:[],isEventListVisible:!0,view:1}:a.state={itemShown:0,updateList:!1,displayedEvent:0,editingEvent:"",eventListArray:[],isEventListVisible:!0,view:0},a.handleCreateEventClick=a.handleCreateEventClick.bind(Object(u.a)(Object(u.a)(a))),a.handleDisplayEvents=a.handleDisplayEvents.bind(Object(u.a)(Object(u.a)(a))),a.getEventListFromLocalStorage=a.getEventListFromLocalStorage.bind(Object(u.a)(Object(u.a)(a))),a.displayedEvent=a.handleDisplayEventChoise.bind(Object(u.a)(Object(u.a)(a))),a.handleEventDeletion=a.handleEventDeletion.bind(Object(u.a)(Object(u.a)(a))),a.handleEventCreation=a.handleEventCreation.bind(Object(u.a)(Object(u.a)(a))),a.handleEventEdition=a.handleEventEdition.bind(Object(u.a)(Object(u.a)(a))),a.handleEventSave=a.handleEventSave.bind(Object(u.a)(Object(u.a)(a))),a.handleDisplayList=a.handleDisplayList.bind(Object(u.a)(Object(u.a)(a))),a.updateDimensions=a.updateDimensions.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"updateDimensions",value:function(){window.outerWidth<600?(console.log("huj"),this.setState({view:1}),this.setState({isEventListVisible:!1})):window.outerWidth>600&&(2===this.state.itemShown&&this.setState({itemShown:0}),this.setState({view:0}),this.setState({isEventListVisible:!0}))}},{key:"componentWillMount",value:function(){this.getEventListFromLocalStorage()}},{key:"getEventListFromLocalStorage",value:function(){null===localStorage.getItem("numberOfEvents")&&localStorage.setItem("numberOfEvents","0");for(var e=[],t=0;t<localStorage.getItem("numberOfEvents");t++)e.push(JSON.parse(localStorage.getItem("event"+t)));this.setState({eventListArray:e})}},{key:"handleEventCreation",value:function(e){var t=this.state.eventListArray;t.push(e),this.setState({eventListArray:t}),this.handleDisplayEventChoise(t.length-1)}},{key:"handleEventDeletion",value:function(e){var t=localStorage.getItem("numberOfEvents"),a=this.state.eventListArray;console.log("splajsowany index to "+e),a.splice(e,1),this.setState({eventListArray:a}),0===e&&0!==a.length?this.setState({displayedEvent:0}):e===a.length&&this.setState({displayedEvent:e-1}),console.log(a),localStorage.clear(),localStorage.setItem("numberOfEvents",t-1);for(var n=0;n<t-1;n++)localStorage.setItem("event"+n,JSON.stringify(a[n]))}},{key:"handleEventEdition",value:function(e){var t=this.state.eventListArray[e];t.editionMode=!0,t.index=e,this.setState({editingEvent:t}),this.setState({itemShown:1})}},{key:"handleEventSave",value:function(e,t){console.log("n to"+t);var a=this.state.eventListArray;a[t]=e,this.setState({eventListArray:a}),this.handleDisplayEventChoise(t)}},{key:"handleDisplayEvents",value:function(){this.setState({itemShown:0})}},{key:"handleDisplayList",value:function(){this.setState({itemShown:2})}},{key:"render",value:function(){var e,t=i.a.createElement(A,{handleEventCreation:this.handleEventCreation,handleEventSave:this.handleEventSave,view:this.state.view,editingEvent:this.state.editingEvent}),a=i.a.createElement(b,{displayedEvent:this.state.displayedEvent,view:this.state.view}),n=i.a.createElement(K,{eventListArray:this.state.eventListArray,lista:!0,wydarzen:!0,handleEventDeletion:this.handleEventDeletion,handleEventChoise:this.handleDisplayEventChoise,handleEventEdition:this.handleEventEdition});return e=0===this.state.view?0===this.state.itemShown?i.a.createElement("div",{style:{display:"flex"}},a,n):i.a.createElement("div",{style:{display:"flex"}},t,n):0===this.state.itemShown?i.a.createElement("div",{style:{display:"flex"}},a):1===this.state.itemShown?i.a.createElement("div",{style:{display:"flex"}},t):i.a.createElement("div",{style:{display:"flex",width:"100vw",flexDirection:"column",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}},n),i.a.createElement("div",{style:{width:"99vw"}},i.a.createElement(G,{onCreateEventClick:this.handleCreateEventClick,onDisplayEventClick:this.handleDisplayEvents,onDisplayListClick:this.handleDisplayList,view:this.state.view}),e)}}]),t}(n.Component),G=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=["Nowe Wydarzenie","Wy\u015bwietl wydarzenie","Lista wydarze\u0144"];return i.a.createElement("nav",{style:$},i.a.createElement("h1",{style:{float:"left"}}," Strona Do Wydarze\u0144"),i.a.createElement("div",{style:{float:"right",padding:3}},i.a.createElement(Y,{name:e[0],handleClick:this.props.onCreateEventClick}),i.a.createElement(Y,{name:e[1],handleClick:this.props.onDisplayEventClick}),1===this.props.view?i.a.createElement(Y,{name:e[2],handleClick:this.props.onDisplayListClick}):i.a.createElement("p",null)))}}]),t}(n.Component),Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={style:ee},a.handleClick=a.handleClick.bind(Object(u.a)(Object(u.a)(a))),a.handleMouseEnter=a.handleMouseEnter.bind(Object(u.a)(Object(u.a)(a))),a.handleMouseLeave=a.handleMouseLeave.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.props.handleClick()}},{key:"handleMouseEnter",value:function(){this.setState({style:te})}},{key:"handleMouseLeave",value:function(){this.setState({style:ee})}},{key:"render",value:function(){return i.a.createElement("div",{style:this.state.style,onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},this.props.name)}}]),t}(n.Component),$={backgroundImage:"linear-gradient(to right,white,grey)",padding:15,display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"100%",height:"auto"},ee={padding:"0.5vh",background:"red",opacity:"0.5"},te={padding:"0.5vh",background:"blue",opacity:"0.5"},ae={imageVisibility:!0,title:"Add your title",organizer:"Add Organizer",beginDate:new Date,endDate:new Date,category:"sport",eventPlace:{lat:0,lng:0},desc:"Add decryption",imgSrc:"Add image source",editionMode:!1,index:0},ne=X;s.a.render(i.a.createElement(ne,null),document.getElementById("root"))},72:function(e,t,a){e.exports=a(158)},77:function(e,t,a){}},[[72,2,1]]]);
//# sourceMappingURL=main.47b35c51.chunk.js.map