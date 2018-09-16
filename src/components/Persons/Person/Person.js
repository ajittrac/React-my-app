import React, { Component } from 'react';
import classes from './Person.css'

class Person extends Component{
        constructor(props){
                super(props);
                console.log('[Person.js] Inside constructor', props)
              }
            
              componentWillMount(){
                console.log('[Person.js] Inside componentWillMount()')
              }
              componentDidMountMount(){
                console.log('[Person.js] Inside componentDidMountMount()')
              }        
              
        render(){
                console.log('[Person.js] Inside render()')        

                return(
                        <div className={classes.Person}>
                                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} Year Old </p>
                                <p>{this.props.children}</p>
                                <input type="text" onChange={this.props.changed}/>
                        </div>
                )         
        }
}  

export default Person;