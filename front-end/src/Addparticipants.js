import React from 'react';
import './App.css';

class Addparticipants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      team:'',
      event: '',
      contactnumber: ''
    }
  }

   onNameChange = (event) => {
    this.setState({name: event.target.value})
   }

   onTeamChange = (event) => {
    this.setState({team: event.target.value})
   }

   onEventChange = (event) => {
   this.setState({event: event.target.value})
   }

   onContactChange = (event) => {
   this.setState({contactnumber: event.target.value})
   }

   onSubmitSignIn = () => {
   	if(this.state.name !== '' && this.state.team !== '' && this.state.event !== '' && this.state.contactnumber !== ''){
    if(this.state.team === 'akg' || this.state.team ==='jss' || this.state.team ==='kites'){
    if(this.state.event === 'football' || this.state.event === 'swimming' || this.state.event === 'volleyball' || this.state.event === 'athletics high jump' || this.state.event === 'athletics 100m' || this.state.event === 'athletics 200m'){
    fetch('http://localhost:3000/addparticipants', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        team: this.state.team,
        event: this.state.event,
        contactnumber:this.state.contactnumber
      })
    })
   }
   else{
    alert("incorrect event input")
   }
   }
   else{
    alert("incorrect team input")
   }
   }
   else {
   alert("form is incomplete. please fill the form again.");
   }
   }




    render(){
 
    return (
      <div className='entry'>
       <form style={{textAlign:'center',color:'white'}}>
       <br/>
        <h2>Name:</h2>
        <input onChange={this.onNameChange} size="30" type="text" name="name" />
        <h2>Team:</h2>
        <input onChange={this.onTeamChange} size= "30" type="text" name="team" />
        <h2>Event:</h2>
        <input onChange={this.onEventChange} size="30" type="text" name="event" /><br />
        <h2>Contact:</h2>
        <input onChange={this.onContactChange} size="30" maxLength="10" type="text" name="contactnumber" />
        <br />
        <br />
        <input style={{backgroundColor:"black",color:'white',height:"50px",width:"150px"}} onClick={this.onSubmitSignIn} type="submit" value="Add Participant" />
       </form>
      </div>   
    );
 }
}


export default Addparticipants;