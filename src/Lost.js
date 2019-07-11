import React, {Component} from  'react';
import "./Lost.css";
import api from './api';
import { Link } from 'react-router-dom';
import App from './App';
import './Home.css';
import Footer from './Footer';
class Lost extends Component {

    state = {
        losses: [],
        city: this.props.city,
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
           <div>
                <section className="lost containerl">
                    {this.state.losses.map(lost => 
                    <div key={lost.id}>
                        <div class="flip-card">
                          <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <img src={lost.data.lose.image} width="250" height="300"/>
                            </div>
                                <div class="flip-card-back">
                                    <h1>{lost.data.lose.name}</h1>
                                        <h3>{lost.data.lose.city}</h3>
                                        <p>{lost.data.lose.date}</p>
                                        <a className=" btnStyle more tran3s home-btn">
                                            <Link to={`lost/details/${lost.id}`}>Show more</Link>
                                        </a>
                                </div>
                            </div>
                      </div>
                        <hr />
                    </div>
                         )}
                </section>
            <Footer/>
           </div>
            
        )
    }
}



export default Lost;