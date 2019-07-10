import React, {Component} from  'react';
import "./Lost.css";
import api from './api';
import { Link } from 'react-router-dom';
import App from './App';
class Lost extends Component {

    state = {
        losses: [],
        city: 'jeddh',
    }
    componentWillMount = () => {
        const locationRef = api.firebase.database().ref('location/city');
        !this.state.city && (
            locationRef.once('value').then(
                snapshot => this.setState({
                    city: snapshot.val()
                }),
                error => console.log(error)
            )
        )
    }
    componentDidMount = () => {
        const locationRef = api.firebase.database().ref('losses');
        const copyLosses = this.state.losses.slice();
        locationRef.once('value').then(
            snapshot => {
                snapshot.forEach(snapshotChilde => {
                    if(snapshotChilde.val().lose.city.toLowerCase() === this.state.city.toLowerCase())
                        copyLosses.push({
                            id: snapshotChilde.key,
                            data: snapshotChilde.val()
                        })
                });
                this.setState({
                    losses: copyLosses
                })
            },
            error => console.log(error)
        )
    }
    
    render(){
        console.log(this.state.city)
        return (
            <div className="lost">
                {this.state.losses.map(lost => 
                <div key={lost.id}>
                    <h1>{lost.data.lose.name}</h1>
                    <h3>{lost.data.lose.city}</h3>
                    <p>{lost.data.lose.date}</p>
                    <Link to={`lost/details/${lost.id}`}>Show more</Link>
                    <hr />
                </div>
                )}
            </div>
            
        )
    }
}



export default Lost;