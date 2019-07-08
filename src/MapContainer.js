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
          let cityIndex = response.data.plus_code.compound_code.indexOf(',') + 2;
          let location = response.data.plus_code.compound_code.slice(cityIndex);
          let spaceIndex = location.indexOf(' ');
          location = location.slice(0, spaceIndex);
          console.log(location);
          const locationRef = api.firebase.database().ref('location');
          locationRef.push({city: location});
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
        <header className="App-header">
            <Map google={google} initialCenter={userLocation} zoom={14} >
                {/* { console.log(this.state.userLocation.lat) }
                { console.log(this.state.userLocation.lng) } */}
                <Marker onClick={this.onMarkerClick}  name={'Current location'} />
            </Map>
        </header>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY"
})(MapContainer)

