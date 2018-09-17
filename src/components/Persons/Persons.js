import React, { Component } from 'react';
import Person from  './Person/Person';


class Persons extends Component {
    constructor(props){
      super(props);
      console.log('[Persons.js] Inside constructor', props)
      this.lastPersonRef = React.createRef();
    }

    componentWillMount(){
      console.log('[Persons.js] Inside componentWillMount()')
    }
    componentDidMountMount(){
      console.log('[Persons.js] Inside componentDidMountMount()')
      this.lastPersonRef = React.createRef();
    }

    componentWillReceiveProps(nextProps) {
      console.log('[Persons.js] Inside componentWillReceiveProps()', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('[Persons.js] Inside shouldComponentUpdate()', nextProps, nextState)
      //return nextProps.Persons !== this.props.persons;
      return true;
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
          position={index}
          age={personlist.age}
          key={personlist.id} 
          ref = {this.lastPersonRef}
          click={()=> this.props.clicked(index)} 
          changed={(event) =>  this.props.changed(event, personlist.id)} />
    });
    }
}
export default Persons;