import React, {Component} from  'react';
import "./Lost.css";
import api from './api';
import { Link } from 'react-router-dom';
import App from './App';
class Lost extends Component {

    state = {
        losses: [],
        city: this.props.city,
    }

    componentDidMount = () => {
        let copyLosses = this.state.losses.slice();
        api.losses()
        .then(response => {
            copyLosses = response.data.records.map(({fields}) => fields)
            this.setState({
                losses: copyLosses.filter(lose => lose.countydisplaynameoflastcontact === this.state.city)
            });
        })
        .catch(error => console.log(error))
    }

    componentWillMount = () => {
        const locationRef = api.firebase.database().ref('location');
        locationRef.on('value', (snapshot) => {
            const lastLocationObject = Object.keys(snapshot.val())[Object.keys(snapshot.val()).length - 1];
            let cityCopy = snapshot.val()[lastLocationObject].city;
            this.setState({
                city: cityCopy
            })
          });
        
        
    }
    
    render(){
        return (
            <div className="lost">
                {this.state.losses.map(lost => 
                <div key={lost.image.id}>
                    <h1>{lost.firstname}</h1>
                    <h3>{lost.countydisplaynameoflastcontact}</h3>
                    <p>{lost.dateoflastcontact}</p>
                    <Link to={`lost/details/${lost.image.id}`}>Show more</Link>
                    <hr />
                </div>
                )}
            </div>
            
        )
    }
}

Lost.defaultProps = {
    city: 'San Diego'
}

export default Lost;