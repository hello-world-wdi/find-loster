import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper, Geocoder} from 'google-maps-react';
import api from './api'
class MapContainer extends Component{
  // To get latitude and longitude of current user location 
  state = { 
    userLocation: { 
            lat: 32, 
            lng: 32 
          }, 
    loading: true 
    };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        //Change the userLocation value 
        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
        
        api.getCity()
        .then(response => {
          const database = api.firebase.database();
          let cityIndex = response.data.plus_code.compound_code.indexOf(',') + 2;
          let location = response.data.plus_code.compound_code.slice(cityIndex);
          location = location.slice(0, location.indexOf(' '));
          const locationRef = database.ref('location').update({
            city: location
          }).then(
            () => console.log('City updated'),
            error => console.log(`City not updated because ${error}`)
          )
        })
        
        
      },
      () => {
        //Change the loading value 
        this.setState({ loading: false });
      }
    );
  }

  render(){
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }
    
    return (
      <div className="App">
        {/* <header className="App-header">
            <Map google={google} initialCenter={userLocation} zoom={14} >
                <Marker onClick={this.onMarkerClick}  name={'Current location'} />
            </Map>
        </header> */}
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY"
})(MapContainer)

