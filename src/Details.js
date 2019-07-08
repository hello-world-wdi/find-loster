import React, {Component} from 'react';
import './Details.css';
import api from './api';
class Details extends Component {

    state = {
        losses: []
    }
    componentDidMount = () => {
        let copyLosses = this.state.losses.slice();
        api.losses()
        .then(response => {
            copyLosses = response.data.records.map(({fields}) => fields)
            this.setState({
                losses: copyLosses
            });
        })
        .catch(error => console.log(error))
        
    }

    render(){
        const lost = this.state.losses.filter(lost => lost.image.id === this.props.match.params.id)
        console.log(lost[0])
        return (
            <div className='Details'>
               {lost.map(({firstname, middlename, lastname, countydisplaynameoflastcontact, dateoflastcontact, image, gender, computedmissingmaxage, currentagefrom}) => 
                   <div key={image.id}>
                       <h1>{`${firstname} ${middlename} ${lastname}`}</h1>
                       <p>{gender}</p>
                       <h3>{countydisplaynameoflastcontact}</h3>
                       <h3>{dateoflastcontact}</h3>
                       <h4>{computedmissingmaxage} || {currentagefrom}</h4>
                   </div>
               )}
            </div>
        )
    }
}

export default Details;
