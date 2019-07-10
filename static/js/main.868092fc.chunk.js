(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(96)},48:function(e,t,a){},49:function(e,t,a){},82:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(19),c=a.n(o),r=a(14),s=a(5),i=a(6),u=a(8),m=a(7),d=a(9),h=(a(48),a(49),a(25)),p=a.n(h),f=a(26),b=a.n(f);b.a.initializeApp({apiKey:"AIzaSyCTbBcJZLB5hmPm3LEpQXMkrbc60eOgQYc",authDomain:"learningtoreact.firebaseapp.com",databaseURL:"https://learningtoreact.firebaseio.com",projectId:"learningtoreact",storageBucket:"",messagingSenderId:"203802469519",appId:"1:203802469519:web:2ddcf658d709d916",rules:{".read":"auth != null",".write":"auth != null"}});var g={losses:function(){return p()({method:"get",url:"https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&facet=cityoflastcontact&facet=countydisplaynameoflastcontact&facet=raceethnicity&facet=statedisplaynameoflastcontact&facet=gender"})},firebase:b.a,getCity:function(){return p()({method:"get",url:"https://maps.googleapis.com/maps/api/geocode/json?latlng=21.5678976,39.1856128&key=AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY"})}},E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={losses:[],city:a.props.city},a.componentDidMount=function(){var e=a.state.losses.slice();g.losses().then(function(t){e=t.data.records.map(function(e){return e.fields}),a.setState({losses:e.filter(function(e){return e.countydisplaynameoflastcontact===a.state.city})})}).catch(function(e){return console.log(e)})},a.componentWillMount=function(){g.firebase.database().ref("location").on("value",function(e){var t=Object.keys(e.val())[Object.keys(e.val()).length-1],n=e.val()[t].city;a.setState({city:n})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"lost"},this.state.losses.map(function(e){return l.a.createElement("div",{key:e.image.id},l.a.createElement("h1",null,e.firstname),l.a.createElement("h3",null,e.countydisplaynameoflastcontact),l.a.createElement("p",null,e.dateoflastcontact),l.a.createElement(r.b,{to:"lost/details/".concat(e.image.id)},"Show more"),l.a.createElement("hr",null))}))}}]),t}(n.Component);E.defaultProps={city:"San Diego"};var v=E,y=a(15),j=(a(82),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={losses:[]},a.componentDidMount=function(){var e=a.state.losses.slice();g.losses().then(function(t){e=t.data.records.map(function(e){return e.fields}),a.setState({losses:e})}).catch(function(e){return console.log(e)})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.losses.filter(function(t){return t.image.id===e.props.match.params.id});return console.log(t[0]),l.a.createElement("div",{className:"Details"},t.map(function(e){var t=e.firstname,a=e.middlename,n=e.lastname,o=e.countydisplaynameoflastcontact,c=e.dateoflastcontact,r=e.image,s=e.gender,i=e.computedmissingmaxage,u=e.currentagefrom;return l.a.createElement("div",{key:r.id},l.a.createElement("h1",null,"".concat(t," ").concat(a," ").concat(n)),l.a.createElement("p",null,s),l.a.createElement("h3",null,o),l.a.createElement("h3",null,c),l.a.createElement("h4",null,i," || ",u))}))}}]),t}(n.Component)),O=a(22),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={userLocation:{lat:32,lng:32},loading:!0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(e){var t=this;navigator.geolocation.getCurrentPosition(function(e){var a=e.coords,n=a.latitude,l=a.longitude;t.setState({userLocation:{lat:n,lng:l},loading:!1}),g.getCity().then(function(e){var t=g.firebase.database(),a=e.data.plus_code.compound_code.indexOf(",")+2,n=e.data.plus_code.compound_code.slice(a);n=n.slice(0,n.indexOf(" "));t.ref("location").update({city:n}).then(function(){return console.log("City updated")},function(e){return console.log("City not updated because ".concat(e))})})},function(){t.setState({loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.userLocation,n=this.props.google;return t?null:l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(O.Map,{google:n,initialCenter:a,zoom:14},l.a.createElement(O.Marker,{onClick:this.onMarkerClick,name:"Current location"}))))}}]),t}(n.Component),N=Object(O.GoogleApiWrapper)({apiKey:"AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY"})(C),D=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(r.b,{to:"/"},"Home"),l.a.createElement("br",null),l.a.createElement(r.b,{to:"/lost"},"Help"),l.a.createElement("br",null),l.a.createElement(r.b,{to:"/newLostInf"},"New Lost"))}}]),t}(n.Component),w=a(20),k=(a(95),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={formData:{name:"",phone:"",lose:{name:"",gender:"",city:"",age:"",date:""}}},a.handelChange=function(e){var t=e.target.value,n=e.target.name,l=Object.assign(a.state.formData);n.includes("u")?l[n.slice(1)]=t:l.lose[n]=t,a.setState({formData:l})},a.handelSubmit=function(e){e.preventDefault(),g.firebase.database().ref().push(a.state.formData).then(function(){return console.log("Data Saved")},function(e){return console.log("Data not Saved: ".concat(e))}),a.props.history.push("/lost")},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t;return l.a.createElement("main",{className:"NewLostInf"},l.a.createElement("aside",{className:"section1"},l.a.createElement("form",{onSubmit:this.handelSubmit},l.a.createElement("div",{id:"first"},l.a.createElement("h3",null,"Lose Information"),l.a.createElement("label",null,"Name "),l.a.createElement("input",{name:"name",type:"text",className:"BoxForm",value:this.state.formData.lose.name,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"City "),l.a.createElement("input",{name:"city",type:"text",placeholder:" Name",className:"BoxForm",value:this.state.formData.lose.city,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Age "),l.a.createElement("input",{name:"age",className:"BoxForm",type:"number",value:this.state.formData.lose.age,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Date "),l.a.createElement("input",{name:"date",className:"BoxForm",type:"date",value:this.state.formData.lose.date,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"genderSpace"},"Gender: "),l.a.createElement("input",(e={name:"gender",value:"male",type:"radio"},Object(w.a)(e,"value",this.state.formData.lose.gender),Object(w.a)(e,"onChange",this.handelChange),e)),"Male",l.a.createElement("input",(t={name:"gender",value:"female",type:"radio"},Object(w.a)(t,"value",this.state.formData.lose.gender),Object(w.a)(t,"onChange",this.handelChange),t)),"Female"))),l.a.createElement("hr",{class:"hr"}),l.a.createElement("aside",{className:"section2"},l.a.createElement("form",{onSubmit:this.handelSubmit},l.a.createElement("div",{id:"first"},l.a.createElement("h3",null,"Your Information"),l.a.createElement("label",null,"Name"),l.a.createElement("input",{className:"BoxForm",name:"uname",type:"text",value:this.state.formData.name,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Phone"),l.a.createElement("input",{className:"BoxForm",name:"uphone",type:"text",value:this.state.formData.phone,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"submit"},l.a.createElement("input",{type:"Submit",value:"Save"}))))))}}]),t}(l.a.Component)),S=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(D,null),l.a.createElement(y.a,{exact:!0,path:"/",component:N}),l.a.createElement(y.a,{exact:!0,path:"/lost/",component:v}),l.a.createElement(y.a,{exact:!0,path:"/lost/details/:id",component:j}),l.a.createElement(y.a,{exact:!0,path:"/newLostInf",component:k}))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=l.a.createElement(r.a,null,l.a.createElement(S,null)),I=document.getElementById("root");c.a.render(x,I),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.868092fc.chunk.js.map