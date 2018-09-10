import React from 'react';
import './Person.css'
import Radium from 'radium';

const person = (props) => {
    return(
            <div className="Person">
                    <p onClick={props.click}>I am {props.name} and I am {props.age} Year Old </p>
                    <p>{props.children}</p>
                    <input type="text" onChange={props.changed}/>
            </div>
    )
    
     
}

export default Radium(person);