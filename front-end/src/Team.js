import React from 'react';
import axios from 'axios';


export class Team1 extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/team1').then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

render() {
    return (
      <div>
      <pre><h3 style={{color:"white"}}>     Name & Contact      Event</h3></pre>
      <ol>
       { this.state.persons.map((person,i) => <li key={i}><pre><h3>{person.name}<br/>{person.contactnumber}          {person.event}</h3></pre></li>)}
      </ol>
      </div>
    )
  }
}




export class Team2 extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/team2').then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

render() {
    return (
      <div>
      <pre><h3 style={{color:"white"}}>     Name & Contact      Event</h3></pre>
      <ol>
       { this.state.persons.map((person,i) => <li key={i}><pre><h3>{person.name}<br/>{person.contactnumber}          {person.event}</h3></pre></li>)}
      </ol>
      </div>
    )
  }
}





export class Team3 extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/team3').then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

render() {
    return (
      <div>
      <pre><h3 style={{color:"white"}}>     Name & Contact      Event</h3></pre>
      <ol>
       { this.state.persons.map((person,i) => <li key={i}><pre><h3>{person.name}<br/>{person.contactnumber}          {person.event}</h3></pre></li>)}
      </ol>
      </div>
    )
  }
}

