import React, { Component } from 'react';
import classes from './App.css';
import Person from  '../components/Persons/Person/Person';
import Persons from  '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from  '../components/Cockpit/Cockpit';
import WithClass from  '../hoc/WithClass';

export const AuthContext = React.createContext(false);

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside constructor', props)
    this.state = {
      persons:[
        {id:'1', name: 'Ajit', age: 30},
        {id:'2', name: 'Ajit1', age: 28 },
        {id:'3', name: 'Ajit2', age: 26 }
      ],
      otherState: 'Some other value',
      showPersons: false,
      toggleClicked : 0,
      authenticated: false
     }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()')
  }
  componentDidMountMount(){
    console.log('[App.js] Inside componentDidMountMount()')
  }

  static getDerviedStateFromProps(nextProps, prevState)
  {
    console.log("[App.js] Inside getDerviedStateFromProps()",
      nextProps,
      prevState
    )
    return prevState;
  }

  getSnapShotBeforeUpdate (){
    console.log('[App.js] Inside getSnapShotBeforeUpdate()')
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
    this.setState( (prevState, props) =>{
      return {
        showPerson: !doesShow,
        toggleClicked: prevState.toggleClicked + 1 
      }
    });
}

loginHandler = () =>{
  console.log('working');
  this.setState({authenticated : true})
}

render() {
  console.log('[App.js] Inside render()')
  let persons = null;
  
  if(this.state.showPerson){
    persons=<Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}
              />
  }

  return (
    <WithClass classes={classes.App}>
        <Cockpit 
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          login={this.loginHandler}
          clicked={this.togglePersonHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}> {persons} </AuthContext.Provider>
    </WithClass>
  );
}
}

export default App;
