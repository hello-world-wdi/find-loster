import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class api extends Component{
  render(){
    return (
      <div className="api">
        <header className="api-header">
          <Map google={this.props.google} zoom={14}>
            <Marker onClick={this.onMarkerClick}  name={'Current location'} />
            <InfoWindow onClose={this.onInfoWindowClose}>
                {/* <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div> */}
            </InfoWindow>
          </Map>
        </header>
      </div>
    );
  }
}

// export default api;
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDIAICVZcHIUeFjNMsHhoNoYcKHuYWdCuY")
})(api)