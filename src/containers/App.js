import React, { Component } from 'react';
import classes from './App.css';
import Person from  '../components/Persons/Person/Person';
import Persons from  '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from  '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props)
    this.state = {
      persons:[
        {id:'1', name: 'Ajit', age: '30' },
        {id:'2', name: 'Ajit1', age: '28' },
        {id:'3', name: 'Ajit2', age: '26' }
      ],
      otherState: 'Some other value',
      showPersons: false
     }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()')
  }
  componentDidMountMount(){
    console.log('[App.js] Inside componentDidMountMount()')
  }

deletePersonHandler = (personIndex) =>{
  //const persons = this.state.persons;
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

nameChangeHandler = (event, id) =>{
  const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
  })
  
  const person = {
    ...this.state.persons[personIndex]
  }
  
  person.name = event.target.value;
  const persons = [...this.state.persons]
  persons[personIndex] = person;

  this.setState({persons: persons})

}

togglePersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
}

render() {
  console.log('[App.js] Inside render()')
  let persons = null;
  
  if(this.state.showPerson){
    persons=<Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}/>
  }

  return (
    <div className={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonHandler}
        />
        {persons}
    </div>
  );
}
}

export default App;
