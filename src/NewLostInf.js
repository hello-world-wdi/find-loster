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
      <main className='NewLostInf'>
                <aside className="section1">
      
      <form onSubmit={this.handelSubmit}>
        <div id="first">
       <h3>Lose Information</h3>
        <label>Name </label>
        <input name='name' type='text' className="BoxForm"  value={this.state.formData.lose.name} onChange={this.handelChange}/><br/><br/>
        <label>City </label>
        <input name='city'type='text' placeholder=" Name" className="BoxForm"  value={this.state.formData.lose.city} onChange={this.handelChange}/><br/><br/>
        <label>Age </label>
        <input name='age' className="BoxForm"  type='number' value={this.state.formData.lose.age} onChange={this.handelChange}/><br/><br/>
        <label>Date </label>
        <input name='date' className="BoxForm"  type='date' value={this.state.formData.lose.date} onChange={this.handelChange}/><br/><br/>
        <label className="genderSpace">Gender: </label>
        <input name="gender" value='male' type="radio" value={this.state.formData.lose.gender} onChange={this.handelChange}/>Male
        <input name="gender" value='female' type="radio" value={this.state.formData.lose.gender} onChange={this.handelChange}/>Female

        </div>
      </form>
      </aside>

      <hr class="hr"/>

         <aside className="section2">
        <form onSubmit={this.handelSubmit}>
          <div id="first">
          <h3>Your Information</h3>
          <label>Name</label>
          <input   className="BoxForm" name='uname' type='text' value={this.state.formData.name} onChange={this.handelChange}/><br/><br/>
          <label>Phone</label>
          <input className="BoxForm" name='uphone'type='text' value={this.state.formData.phone} onChange={this.handelChange}/><br/><br/>

          <div className="submit">
          <input type='Submit' value='Save' />
          </div>

          </div>
        </form>
        </aside>
        

      </main>
    );
  }
}

export default NewLostInf;
