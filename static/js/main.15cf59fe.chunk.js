(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(19),c=t.n(r),o=t(3),s=t(6),i=t(7),m=t(9),u=t(8),d=t(10),h=(t(49),t(50),t(25)),p=t.n(h),E=t(26),f=t.n(E);f.a.initializeApp({apiKey:"AIzaSyCTbBcJZLB5hmPm3LEpQXMkrbc60eOgQYc",authDomain:"learningtoreact.firebaseapp.com",databaseURL:"https://learningtoreact.firebaseio.com",projectId:"learningtoreact",storageBucket:"",messagingSenderId:"203802469519",appId:"1:203802469519:web:2ddcf658d709d916",rules:{".read":"auth != null",".write":"auth != null"}});var b={losses:function(){return p()({method:"get",url:"https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&facet=cityoflastcontact&facet=countydisplaynameoflastcontact&facet=raceethnicity&facet=statedisplaynameoflastcontact&facet=gender"})},firebase:f.a,getCity:function(){return p()({method:"get",url:"https://maps.googleapis.com/maps/api/geocode/json?latlng=21.5678976,39.1856128&key=AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY"})}},g=(t(24),t(79),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("p",null,"Copyright @2019 All rights reserved by Lost team")))))}),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={losses:[],city:t.props.city},t.componentWillMount=function(){var e=b.firebase.database().ref("location/city");!t.state.city&&e.once("value").then(function(e){return t.setState({city:e.val()})},function(e){return console.log(e)})},t.componentDidMount=function(){var e=b.firebase.database().ref("losses"),a=t.state.losses.slice();e.once("value").then(function(e){e.forEach(function(e){e.val().lose.city.toLowerCase()===t.state.city.toLowerCase()&&a.push({id:e.key,data:e.val()})}),t.setState({losses:a})},function(e){return console.log(e)})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state.city),l.a.createElement("div",null,l.a.createElement("section",{className:"lost containerl"},this.state.losses.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("div",{class:"flip-card"},l.a.createElement("div",{class:"flip-card-inner"},l.a.createElement("div",{class:"flip-card-front"},l.a.createElement("img",{src:e.data.lose.image,width:"250",height:"300"})),l.a.createElement("div",{class:"flip-card-back"},l.a.createElement("h1",null,e.data.lose.name),l.a.createElement("h3",null,e.data.lose.city),l.a.createElement("p",null,e.data.lose.date),l.a.createElement("a",{className:" btnStyle more tran3s home-btn"},l.a.createElement(o.b,{to:"lost/details/".concat(e.id)},"Show more"))))),l.a.createElement("hr",null))})),l.a.createElement(g,null))}}]),a}(n.Component),y=t(15),N=(t(84),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={losses:[],city:t.props.city},t.componentWillMount=function(){var e=b.firebase.database().ref("location/city");!t.state.city&&e.once("value").then(function(e){return t.setState({city:e.val()})},function(e){return console.log(e)})},t.componentDidMount=function(){var e=b.firebase.database().ref("losses"),a=t.state.losses.slice();e.once("value").then(function(e){e.forEach(function(e){e.val().lose.city.toLowerCase()===t.state.city.toLowerCase()&&a.push({id:e.key,data:e.val()})}),t.setState({losses:a})},function(e){return console.log(e)})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.state.losses.filter(function(a){return a.id===e.props.match.params.id});return console.log(a[0]),l.a.createElement("div",null,l.a.createElement("section",{className:"Details"},a.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("img",{src:e.data.lose.image}),l.a.createElement("h1",null,"".concat(e.data.lose.name)),l.a.createElement("p",null,e.data.lose.city),l.a.createElement("h3",null,e.data.lose.date),l.a.createElement("h3",null,e.data.lose.gender),l.a.createElement("h4",null,"Please if you see this person call this number:"),l.a.createElement("h5",null,l.a.createElement("b",null,e.data.name," "),l.a.createElement("em",null,e.data.phone)))})),l.a.createElement(g,null))}}]),a}(n.Component)),C=t(21),j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={userLocation:{lat:32,lng:32},loading:!0},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(e){var a=this;navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,n=t.latitude,l=t.longitude;a.setState({userLocation:{lat:n,lng:l},loading:!1}),b.getCity().then(function(e){var a=b.firebase.database(),t=e.data.plus_code.compound_code.indexOf(",")+2,n=e.data.plus_code.compound_code.slice(t);n=n.slice(0,n.indexOf(" "));a.ref("location").update({city:n}).then(function(){return console.log("City updated")},function(e){return console.log("City not updated because ".concat(e))})})},function(){a.setState({loading:!1})})}},{key:"render",value:function(){var e=this.state,a=e.loading,t=e.userLocation,n=this.props.google;return a?null:l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(C.Map,{google:n,initialCenter:t,zoom:14},l.a.createElement(C.Marker,{onClick:this.onMarkerClick,name:"Current location"}))))}}]),a}(n.Component),k=(Object(C.GoogleApiWrapper)({apiKey:"AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY"})(j),t(97),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},"Lost"),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link"},l.a.createElement(o.b,{to:"/",className:"nav-link js-scroll-trigger"},"Home"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link"},l.a.createElement(o.b,{to:"/About",className:"nav-link js-scroll-trigger"},"About"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link"},l.a.createElement(o.b,{to:"/Services",className:"nav-link js-scroll-trigger"},"Services"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link"},l.a.createElement(o.b,{to:"/Contact",className:"nav-link js-scroll-trigger"},"Contact")))))))}}]),a}(n.Component)),O=(t(98),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={formData:{name:"",phone:"",lose:{name:"",gender:"",city:"",age:"",date:"",image:""}}},t.handelChange=function(e){var a=e.target.value;console.log(a);var n=e.target.name,l=Object.assign(t.state.formData);n.includes("u")?l[n.slice(1)]=a:l.lose[n]=a,t.setState({formData:l})},t.handelSubmit=function(e){e.preventDefault(),b.firebase.database().ref("losses").push(t.state.formData).then(function(){return console.log("Data Saved")},function(e){return console.log("Data not Saved: ".concat(e))}),t.props.history.push("/lost")},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("main",{className:"NewLostInf"},l.a.createElement("aside",{className:"section1"},l.a.createElement("form",{onSubmit:this.handelSubmit},l.a.createElement("div",{id:"first"},l.a.createElement("h3",null,"Lose Information"),l.a.createElement("label",null,"Name "),l.a.createElement("input",{name:"name",type:"text",className:"BoxForm",placeholder:"Ali Alali",value:this.state.formData.lose.name,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"City "),l.a.createElement("input",{name:"city",type:"text",placeholder:"Jeddah",className:"BoxForm",value:this.state.formData.lose.city,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Image "),l.a.createElement("input",{name:"image",type:"text",placeholder:"images/lose.jpg",className:"BoxForm",value:this.state.formData.lose.image,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Age "),l.a.createElement("input",{name:"age",className:"BoxForm",placeholder:"47",type:"number",value:this.state.formData.lose.age,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Date "),l.a.createElement("input",{name:"date",className:"BoxForm",type:"date",value:this.state.formData.lose.date,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",{className:"genderSpace"},"Gender: "),l.a.createElement("input",{name:"gender",value:"male",type:"radio",onChange:this.handelChange}),"Male",l.a.createElement("input",{name:"gender",value:"female",type:"radio",onChange:this.handelChange}),"Female"))),l.a.createElement("hr",{class:"hr"}),l.a.createElement("aside",{className:"section2"},l.a.createElement("form",{onSubmit:this.handelSubmit},l.a.createElement("div",{id:"first"},l.a.createElement("h3",null,"Your Information"),l.a.createElement("label",null,"Name"),l.a.createElement("input",{className:"BoxForm",placeholder:"Ahmed Alahmed",name:"uname",type:"text",value:this.state.formData.name,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Phone"),l.a.createElement("input",{className:"BoxForm",placeholder:"0512365498",name:"uphone",type:"text",value:this.state.formData.phone,onChange:this.handelChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"submit"},l.a.createElement("input",{type:"Submit",value:"Save"})))))),l.a.createElement("div",{className:"footer"},l.a.createElement(g,null)))}}]),a}(l.a.Component)),w=(t(99),function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("h2",{className:"aboutSection"},"About Lost "),l.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type."))))))}),S=t(43),x=t.n(S),A=function(){return l.a.createElement("div",null,l.a.createElement("section",{className:"cover"},l.a.createElement("div",{className:"cover_text"},l.a.createElement("h1",null,"Find Your Missing People",l.a.createElement("br",null),"Easy Steps !!"),l.a.createElement("br",null),l.a.createElement("p",null,"if you're looking for lost or missing  ",l.a.createElement("br",null),"person just post their information  ",l.a.createElement("br",null),"if you want to help to find those lost people",l.a.createElement("br",null),"click on helper button now !!")),l.a.createElement("div",{className:"btn-container"},l.a.createElement("a",{className:" btnStyle more tran3s home-btn"},l.a.createElement(o.b,{to:"/lost"},"Helper")),l.a.createElement("a",{className:"btnStyle more tran3s home-btn"},l.a.createElement(o.b,{to:"/newLostInf"},"New Lost"))),l.a.createElement("div",null,l.a.createElement("img",{src:x.a,className:"map"}))),l.a.createElement(w,null),l.a.createElement(g,null))},D=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k,null),l.a.createElement(y.a,{exact:!0,path:"/",component:A}),l.a.createElement(y.a,{path:"/About/",component:w}),l.a.createElement(y.a,{exact:!0,path:"/lost/",component:v}),l.a.createElement(y.a,{exact:!0,path:"/lost/details/:id",component:N}),l.a.createElement(y.a,{exact:!0,path:"/newLostInf",component:O}))}}]),a}(l.a.Component);t(100),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=l.a.createElement(o.a,null,l.a.createElement(D,null)),L=document.getElementById("root");c.a.render(I,L),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,a,t){},43:function(e,a,t){e.exports=t.p+"static/media/map2.5f341982.png"},44:function(e,a,t){e.exports=t(101)},49:function(e,a,t){},50:function(e,a,t){},79:function(e,a,t){},84:function(e,a,t){},97:function(e,a,t){},98:function(e,a,t){},99:function(e,a,t){}},[[44,1,2]]]);
//# sourceMappingURL=main.15cf59fe.chunk.js.map