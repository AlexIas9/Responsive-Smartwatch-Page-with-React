import React from "react";
import classes from './TopBar.module.css';

const Topbar = () =>{
    return(
        <header className="App-header">
        <nav className={classes.Topbar}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'alt='Amazon Logo'/>
       </nav>
       </header>
    );
}

export default Topbar;