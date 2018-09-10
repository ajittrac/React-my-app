import React, { Component } from 'react';
import './App.css';
import Person from  './Person/Person';
import person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons:[
      {id:'1', name: 'Ajit', age: '30' },
      {id:'2', name: 'Ajit1', age: '28' },
      {id:'3', name: 'Ajit2', age: '26' }
    ],
    otherState: 'Some other value'
  }

  // switchNameHandler = (newName) =>{
  //   //Dont do this  //this.state.persons[0].name = 'Ajit More'; 
  //   this.setState({
  //     persons:[
  //       { name: newName, age: '35' },
  //       { name: 'Ajit1', age: '28' },
  //       { name: 'Ajit2', age: '26' }
  //     ],
  //     otherState: 'Some other value, this has been changed',
  //     showPerson: 'false' 
  //   })
  // }

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
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color:'black'
      }
    };

    let persons = null;
    if(this.state.showPerson){
      persons=(
        <div>
          {this.state.persons.map((personlist, index)=> {
                return <Person 
                  name={personlist.name} 
                  age={personlist.age} 
                  key={personlist.id}
                  click={()=> this.deletePersonHandler(index)} 
                  changed={(event) =>  this.nameChangeHandler(event, personlist.id)} />
            })}
                {/* <Person 
                      name={this.state.persons[0].name} 
                      age={this.state.persons[0].age} >I am a bad guy</Person>
                <Person 
                      name={this.state.persons[1].name} 
                      age={this.state.persons[1].age}
                      click={this.switchNameHandler } 
                      changed={this.nameChangeHandler}>My Hobbies : Play</Person>
                <Person 
                      name={this.state.persons[2].name} 
                      age={this.state.persons[2].age} /> */}
              </div>
      );
        style.backgroundColor = 'red';
        style[':hover']={
          backgroundColor: 'lightred',
          color:'black'
        }
    }

    const classes =[];
    if(this.state.persons.length <=2)
    {
      classes.push('red');
    }
    if(this.state.persons.length <=1)
    {
      classes.push('bold');
    }

    return (
      <div className="App">
       <h1>Hi am react App</h1>
       <p className={classes.join(' ')}>This is Really working !!</p>
       <button style={style}
          // onClick={() => this.switchNameHandler('Rakesh Shinde')}>Switch Name</button>
          onClick={this.togglePersonHandler}>Toggle Person</button>
          {persons}
          {/* {this.state.showPerson === true ? 
              //: null}*/}
      </div>
    );
  }
}

export default Radium(App);
