import React, { Component } from 'react';
import Person from  './Person/Person';

class Persons extends Component {
    constructor(props){
      super(props);
      console.log('[Persons.js] Inside constructor', props)
    }

    componentWillMount(){
      console.log('[Persons.js] Inside componentWillMount()')
    }
    componentDidMountMount(){
      console.log('[Persons.js] Inside componentDidMountMount()')
    }

    componentWillReceiveProps(nextProps) {
      console.log('[Persons.js] Inside componentWillReceiveProps()', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('[Persons.js] Inside shouldComponentUpdate()', nextProps, nextState)
      return nextProps.Persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState) {
      console.log('[Persons.js] Inside componentWillUpdate()', nextProps, nextState)
    }

    componentDidUpdate() {
      console.log('[Persons.js] Inside componentDidUpdate()')
    }

    render () {
      console.log('[Persons.js] Inside render()')        
      return this.props.persons.map((personlist, index)=> {
        return <Person 
          name={personlist.name} 
          age={personlist.age}
          key={personlist.id} 
          click={()=> this.props.clicked(index)} 
          changed={(event) =>  this.props.changed(event, personlist.id)} />
    });
    }
}
export default Persons;