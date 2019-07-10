import React, {Component} from 'react';
import './Details.css';
import api from './api';
class Details extends Component {

    state = {
        losses: [],
        city: 'jeddh'
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
        const lost = this.state.losses.filter(lost => lost.id === this.props.match.params.id)
        console.log(lost[0])
        return (
            <div className='Details'>
               {lost.map( lose => 
                   <div key={lose.id}>
                       <img src={lose.data.lose.image} />
                       <h1>{`${lose.data.lose.name}`}</h1>
                       <p>{lose.data.lose.city}</p>
                       <h3>{lose.data.lose.date}</h3>
                       <h3>{lose.data.lose.gender}</h3>
                       <h4>Plase if you see this person call:</h4>
                       <h5><b>{lose.data.name} </b><em>{lose.data.phone}</em></h5>
                   </div>
               )}
            </div>
        )
    }
}

export default Details;
