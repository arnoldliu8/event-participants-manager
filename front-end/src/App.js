import React, { Component } from 'react';
import Addparticipants from './Addparticipants';

import {Event1,Event2,Event3,Event4} from './Event';

import {Team1,Team2,Team3} from './Team';

import './App.css';

class App extends React.Component {
constructor(props){
    super(props);
    this.state = {
    event:[],
    team:[]
  } 
  }
  
  onEvent1=()=>{
    this.setState({event:<Event1/>})
    
  }
  onEvent2=()=>{
    this.setState({event:<Event2/>})
  }
  onEvent3=()=>{
    this.setState({event:<Event3/>})
  }
  onEvent4=()=>{
    this.setState({event:<Event4/>})
  }

  onTeam1=()=>{
    this.setState({team:<Team1/>})
  }
  onTeam2=()=>{
    this.setState({team:<Team2/>})
  }
  onTeam3=()=>{
    this.setState({team:<Team3/>})
  }

  onClearTeam=()=>
  {
    this.setState({team:[]})
  }
  
  
  onClearEvent=()=>
  {
    this.setState({event:[]})
  }
  


  render() {
    

    return (
      <div>
      <Addparticipants/>
            <br/>
            <div className="row">
                <br/>
                <h1 style={{textAlign:"center",fontSize:"80px"}}>NAME OF THE EVENT</h1>
                
                <div className="column" >
                <h2 className="head">View By Event</h2>
                         
                          <button className="button" onClick={this.onEvent1}>Event1</button>
                          <button className="button" onClick={this.onEvent2}>Event2</button>
                          <button className="button" onClick={this.onEvent3}>Event3</button>
                          <button className="button" onClick={this.onEvent4}>Event4</button>
                          <br/><br/>
                          <button className="button" onClick={this.onClearEvent}>Clear</button>
                          <br/><br/>
                          {this.state.event}

                </div>
                
                <div className="column" >
                 <h2 className="head">View by Team</h2>
                          
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>
                          <button className="button" onClick={this.onTeam3}>Team3</button>
                          <br/><br/>
                          <button className="button" onClick={this.onClearTeam}>Clear</button> 
                          <br/><br/>
                          {this.state.team}   
                                                       
                </div>
      </div>
      </div>

); 
}
}

export default App;
