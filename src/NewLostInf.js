import React, { Component } from "react";
import './NewLostInf.css';
import { Redirect } from 'react-router-dom'
import api from './api';
import Footer from './Footer'
import './Home.css'
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
          image: ''
      }
    },
  };
  handelChange = event => {
    const value = event.target.value;
    console.log(value)
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
    api.firebase.database().ref('losses').push(this.state.formData).then(
      () => console.log('Data Saved'),
      error => console.log(`Data not Saved: ${error}`)
    )
    this.props.history.push(`/lost`);
  }
  render() {
    return (
     <div>
        <main className='NewLostInf'>
            <aside className="section1">
      
            <form onSubmit={this.handelSubmit}>
              <div id="first">
                  <h3>Lose Information</h3>
                    <label>Name </label>
                    <input name='name' type='text' className="BoxForm" placeholder="Ali Alali"  value={this.state.formData.lose.name} onChange={this.handelChange}/><br/><br/>
                    <label>City </label>
                    <input name='city'type='text' placeholder="Jeddah" className="BoxForm"  value={this.state.formData.lose.city} onChange={this.handelChange}/><br/><br/>
                    <label>Image </label>
                    <input name='image'type='text' placeholder="images/lose.jpg" className="BoxForm"  value={this.state.formData.lose.image} onChange={this.handelChange}/><br/><br/>
                    <label>Age </label>
                    <input name='age' className="BoxForm" placeholder="47" type='number' value={this.state.formData.lose.age} onChange={this.handelChange}/><br/><br/>
                    <label>Date </label>
                    <input name='date' className="BoxForm"  type='date' value={this.state.formData.lose.date} onChange={this.handelChange}/><br/><br/>
                    <label className="genderSpace">Gender: </label>
                    <input name="gender" value='male' type="radio"  onChange={this.handelChange}/>Male
                    <input name="gender" value='female' type="radio"  onChange={this.handelChange}/>Female
              </div>
            </form>
      </aside>

      <hr class="hr"/>

         <aside className="section2">
        <form onSubmit={this.handelSubmit}>
          <div id="first">
          <h3>Your Information</h3>
          <label>Name</label>
          <input   className="BoxForm" placeholder="Ahmed Alahmed" name='uname' type='text' value={this.state.formData.name} onChange={this.handelChange}/><br/><br/>
          <label>Phone</label>
          <input className="BoxForm" placeholder="0512365498" name='uphone'type='text' value={this.state.formData.phone} onChange={this.handelChange}/><br/><br/>

          <div className="submit">
          <input type='Submit' value='Save' />
          </div>

          </div>
        </form>
        </aside>

       
      </main>
       <div className="footer">
       <Footer/>
    </div>
     </div>
    );
  }
}

export default NewLostInf;
