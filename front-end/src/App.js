import React, { Component } from 'react';
import Addparticipants from './Addparticipants';

import {Event1,Event2,Event3,Event4} from './Event';

import {Team1,Team2,Team3} from './Team';

import './App.css';

class App extends React.Component {
constructor(props){
    super(props);
    this.state = {
    mode:''
  } 
  }

  onEvent1=()=>{
    this.setState({mode:'Event1'})
  }
  onEvent2=()=>{
    this.setState({mode:'Event2'})
  }
  onEvent3=()=>{
    this.setState({mode:'Event3'})
  }
  onEvent4=()=>{
    this.setState({mode:'Event4'})
  }

  onTeam1=()=>{
    this.setState({mode:'Team1'})
  }
  onTeam2=()=>{
    this.setState({mode:'Team2'})
  }
  onTeam3=()=>{
    this.setState({mode:'Team3'})
  }

  onClear=()=>
  {
    this.setState({mode:'view'})
  }
  
  


  render() {
    const {mode} = this.state;
    let event,team;
    if(mode==='Event1'){
     event=<Event1/>
    }
    else if(mode==='Event2'){
     event=<Event2/>
    }
    else if(mode==='Event3'){
     event=<Event3/>
    }
    else if(mode==='Event4'){
     event=<Event4/>
    }
    else if(mode==='Team1'){
     team=<Team1/>
    }
    else if(mode==='Team2'){
     team=<Team2/>
    }
    else if(mode==='Team3'){
     team=<Team3/>
    }

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
                          <button className="button" onClick={this.onClear}>Clear</button>
                          <br/><br/>
                          {event}

                </div>
                
                <div className="column" >
                 <h2 className="head">View by Team</h2>
                          
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>
                          <button className="button" onClick={this.onTeam3}>Team3</button>
                          <br/><br/>
                          <button className="button" onClick={this.onClear}>Clear</button> 
                          <br/><br/>
                          {team}   
                                                       
                </div>
      </div>
      </div>

); 
}
}

export default App;
