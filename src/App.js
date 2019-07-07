import React, {Component} from 'react';
import './App.css';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class App extends Component{
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
                { console.log(this.state.userLocation.lat) }
                { console.log(this.state.userLocation.lng) }
                <Marker onClick={this.onMarkerClick}  name={'Current location'} />
            </Map>
        </header>
      </div>
    );
  }
}

// export default App;
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY")
})(App)