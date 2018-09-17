import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses =[];
    let buttonClass = classes.Button;
    if(props.showPersons)
    {
        buttonClass = [classes.Button, classes.Red].join(' ');     
    }

    if(props.persons.length <=2)
    {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <=1)
    {
      assignedClasses.push(classes.bold);
    }

    return(
        <div>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>This is Really working !!</p>
            <button className={buttonClass} onClick={props.clicked}>Toggle Person</button>
            <button onClick={props.login} >Log In</button>
        </div>
       
    );
};

export default cockpit;