import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './Person.css'
import {AuthContext} from '../../../containers/App';

class Person extends Component{
        constructor(props){
                super(props);
                console.log('[Person.js] Inside constructor', props)
                this.inputElement = React.createRef();
              }
            
              componentWillMount(){
                console.log('[Person.js] Inside componentWillMount()')
              }
              componentDidMount(){
                console.log('[Person.js] Inside componentDidMountMount()')
                if(this.props.curposition === 0)
                {
                        this.inputElement.current.focus();                                
                }
                
              }        

              focus () {
                      this.input.current.focus();
              }
              
        render(){
                console.log('[Person.js] Inside render()')        

                return(
                        <div className={classes.Person}>
                                <AuthContext.Consumer>                                        
                                {auth => auth ? <p>isAunthenticated True </p> : null}
                                </AuthContext.Consumer>
                                <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} Year Old </p>
                                <p>{this.props.children}</p>
                                <input 
                                       ref={this.inputElement} 
                                type="text" onChange={this.props.changed} value={this.props.name}/>
                        </div>
                )         
        }
}  

Person.propTypes = {
        click:PropTypes.func,
        name:PropTypes.string,
        age:PropTypes.number,
        changed:PropTypes.func

}

export default Person;