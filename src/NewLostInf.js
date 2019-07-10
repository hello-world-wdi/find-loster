import React, { Component } from "react";
import './NewLostInf.css';
import { Redirect } from 'react-router-dom'
import api from './api'
class NewLostInf extends React.Component {
  state = {
    formData: {
        name: '',
        phone: '',
        lose: {
          name: '',
          gender: '',
          city: '',
          age: '',
          date: '',
      }
    },
  };
  handelChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const copyFormData = Object.assign(this.state.formData);
    if(name.includes('u'))
      copyFormData[name.slice(1)] = value;
    else
      copyFormData.lose[name] = value;
    this.setState({
      formData: copyFormData
    });
  }

  handelSubmit = event => {
    event.preventDefault();
    api.firebase.database().ref().push(this.state.formData).then(
      () => console.log('Data Saved'),
      error => console.log(`Data not Saved: ${error}`)
    )
    this.props.history.push(`/lost`);
  }
  render() {
    return (
      <div className='NewLostInf'>
        <h1>Information</h1>
        <form onSubmit={this.handelSubmit}>
          <label><h3>Your Information</h3></label>
          <label>Name: </label>
          <input name='uname' type='text' value={this.state.formData.name} onChange={this.handelChange}/>
          <label>Phone: </label>
          <input name='uphone'type='text' value={this.state.formData.phone} onChange={this.handelChange}/>
          <hr/>
          <label><h3>Lose Information</h3></label>

          <label>Name: </label>
          <input name='name' type='text' value={this.state.formData.lose.name} onChange={this.handelChange}/>
          <label>Gender: </label>
          <select name="gender" value={this.state.formData.lose.gender} onChange={this.handelChange}>
          <option value=''></option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <label>City: </label>
          <input name='city'type='text' value={this.state.formData.lose.city} onChange={this.handelChange}/>
          <label>Age: </label>
          <input name='age' type='number' value={this.state.formData.lose.age} onChange={this.handelChange}/>
          <label>Date: </label>
          <input name='date' type='date' value={this.state.formData.lose.date} onChange={this.handelChange}/>
          <br/>
          <input type='Submit' value='Save' />
        </form>
      </div>
    );
  }
}

export default NewLostInf;