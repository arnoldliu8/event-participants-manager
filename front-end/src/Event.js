import React from 'react';
import axios from 'axios';





export class Event1 extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/event1').then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

render() {
    return (
      <div>
      <pre><h3 style={{color:"white"}}>     Name & Contact      Team</h3></pre>
      <ol>
       { this.state.persons.map((person,i) => <li key={i}><pre><h3>{person.name}<br/>{person.contactnumber}          {person.team}</h3></pre></li>)}
      </ol>
      </div>
    )
  }
}





export class Event2 extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/event2').then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

render() {
    return (
      <div>
      <pre><h3 style={{color:"white"}}>     Name & Contact      Team</h3></pre>
      <ol>
       { this.state.persons.map((person,i) => <li key={i}><pre><h3>{person.name}<br/>{person.contactnumber}          {person.team}</h3></pre></li>)}
      </ol>
      </div>
    )
  }
}




export class Event3 extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/event3').then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

render() {
    return (
      <div>
      <pre><h3 style={{color:"white"}}>     Name & Contact      Team</h3></pre>
      <ol>
       { this.state.persons.map((person,i) => <li key={i}><pre><h3>{person.name}<br/>{person.contactnumber}          {person.team}</h3></pre></li>)}
      </ol>
      </div>
    )
  }
}




export class Event4 extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/event4').then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

render() {
    return (
      <div>
      <pre><h3 style={{color:"white"}}>     Name & Contact      Team</h3></pre>
      <ol>
       { this.state.persons.map((person,i) => <li key={i}><pre><h3>{person.name}<br/>{person.contactnumber}          {person.team}</h3></pre></li>)}
      </ol>
      </div>
    )
  }
}