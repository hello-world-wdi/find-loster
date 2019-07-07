import React, {Component} from  'react';
import "./Lost.css";
import { losses } from './api';
import { Link } from 'react-router-dom';
class Lost extends Component {

    state = {
        losses: []
    }

    componentDidMount = () => {
        let copyLosses = this.state.losses.slice();
        losses()
        .then(response => {
            copyLosses = response.data.records.map(({fields}) => fields)
            this.setState({
                losses: copyLosses
            });
        })
        .catch(error => console.log(error))
        
    }

    render(){
        return (
            <div className="lost">
                {this.state.losses.map(lost => 
                <div key={lost.image.id}>
                    <h1>{lost.firstname}</h1>
                    <h3>{lost.countydisplaynameoflastcontact}</h3>
                    <p>{lost.dateoflastcontact}</p>
                    <Link to={`details/${lost.image.id}`}>Show more</Link>
                    <hr />
                </div>
                )}
            </div>
            
        )
    }
}

export default Lost;