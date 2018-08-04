import React, { Component } from 'react';
import Addparticipants from './Addparticipants';

import {Event1,Event2,Event3,Event4} from './Event';

import {Team1,Team2,Team3} from './Team';

import './App.css';

class App extends React.Component {
constructor(props){
    super(props);
    this.state = {
    mode:'view'
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
    if(this.state.mode==='view'){
    return (
      <div>
         <div className="entry">
         <Addparticipants/>
         </div>
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
                        
                </div>
                
                <div className="column" >
                 <h2 className="head">View by Team</h2>
                          
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>
                          <button className="button" onClick={this.onTeam3}>Team3</button>
                          
                </div>
            </div>
            
      </div>

    ); 
    }
    


    else if(this.state.mode==='Event1'){
      return(
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
                          <button className="button" onClick={this.onEvent4}>Event4</button><br/>
                          <button className="button" onClick={this.onClear}>Clear</button>
                          
                          <Event1/>
                                                  
                </div>
              
                <div className="column" >
                  <h2 className="head">View By Team</h2>
                          
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>              
                          <button className="button" onClick={this.onTeam3}>Team3</button>
                          
                </div>
            </div>
        </div>
      );
    } 
    
    


    else if (this.state.mode==='Event2'){
      return(
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
                          <button className="button" onClick={this.onEvent4}>Event4</button><br/>
                          <button className="button" onClick={this.onClear}>Clear</button>                    
                          
                          <Event2/>
                          
                </div>

             
                <div className="column" >
                   <h2 className="head">View By Team</h2>
                          <div className="button">
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>              
                          <button className="button" onClick={this.onTeam3}>Team3</button>
                          </div>
                </div>
            </div>
        </div>
      );
    }
      



      else if (this.state.mode==='Event3'){
      return(
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
                          <button className="button" onClick={this.onEvent4}>Event4</button><br/>
                          <button className="button" onClick={this.onClear}>Clear</button>
                          
                          <Event3/>
                          
                </div>
              
                <div className="column" >
                  <h2 className="head">View By Team</h2>
                          
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>              
                          <button className="button" onClick={this.onTeam3}>Team3</button>
                        
                </div>
            </div>
        </div>
      );
    }
    




    else if (this.state.mode==='Event4'){
      return(
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
                          <button className="button" onClick={this.onEvent4}>Event4</button><br/>
                          <button className="button" onClick={this.onClear}>Clear</button>
                          
                          <Event4/>
                </div>
         
                
                <div className="column" >
                <h2 className="head">View By Team</h2>
                          
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>              
                          <button className="button" onClick={this.onTeam3}>Team3</button>
                          
                </div>
            </div>
        </div>
      );
    }
    




    else if (this.state.mode==='Team1'){
      return(
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
                          
                </div>
      
               
                <div className="column" >
                <h2 className="head">View By Team</h2>
                          
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>              
                          <button className="button" onClick={this.onTeam3}>Team3</button><br/>
                          <button className="button" onClick={this.onClear}>Clear</button>
                          
                          <Team1/>
                   
                </div>
            </div>
        </div>
      );
    }
    


    else if (this.state.mode==='Team2'){
      return(
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
                </div>
        
     
                <div className="column" >
                          <h2 className="head">View By Team</h2>
                          
                          <button className="button" onClick={this.onTeam1}>Team1</button>
                          <button className="button" onClick={this.onTeam2}>Team2</button>              
                          <button className="button" onClick={this.onTeam3}>Team3</button><br/>
                          <button className="button" onClick={this.onClear}>Clear</button>
                          
                          <Team2/>
                         
                </div>
            </div>
        </div>
      );
    }
    




    else if (this.state.mode==='Team3'){
      return(
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
                          
                </div>
              
                <div className="column" >
                <h2 className="head">View By Team</h2>
                          
                          <button className="button" onClick={this.onEvent1}>Team1</button>
                          <button className="button" onClick={this.onEvent2}>Team2</button>              
                          <button className="button" onClick={this.onEvent3}>Team3</button><br/>
                          <button className="button" onClick={this.onClear}>Clear</button>
                          
                          <Team3/>
                    
                </div>
            </div>
        </div>
      );
    }
    



    else{
      return(
        document.write("error loading page")
        )
    }
}      
}

export default App;