import axios from 'axios';
import firebase from 'firebase';

const losses = () => {
  return axios({
    method: 'get',
    url: 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=namus-missings&facet=cityoflastcontact&facet=countydisplaynameoflastcontact&facet=raceethnicity&facet=statedisplaynameoflastcontact&facet=gender'
  })
}

 const config = {
  apiKey: "AIzaSyCTbBcJZLB5hmPm3LEpQXMkrbc60eOgQYc",
    authDomain: "learningtoreact.firebaseapp.com",
    databaseURL: "https://learningtoreact.firebaseio.com",
    projectId: "learningtoreact",
    storageBucket: "",
    messagingSenderId: "203802469519",
    appId: "1:203802469519:web:2ddcf658d709d916",
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
  
};
firebase.initializeApp(config);

const getCity = () => {
  return axios({
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=21.5678976,39.1856128&key=AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY'
  })
}
const api = {
  losses : losses,
  firebase : firebase,
  getCity: getCity
}

export default api;