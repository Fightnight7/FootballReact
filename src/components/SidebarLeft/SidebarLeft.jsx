import React from 'react';
import classes from './SidebarLeft.module.css';
import SidebarNav from './SidebarNav/SidebarNav';
import Voting from './Voting/Voting'

const SidebarLeft = (props) => {
    return (
        <div className={classes.sidebar}>
            <SidebarNav newsSearch={props.newsSearch} Search={props.Search}/>
            <Voting/>
        </div>
    )
};

export default SidebarLeft;