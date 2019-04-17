import React from 'react';
import classes from './SidebarRight.module.css';
import LeagueTable from './LeagueTable/LeagueTable';



const SidebarRight = (props) => {
    return (
        <div className={classes.sidebar}>
            <LeagueTable LeagueTableData={props.LeagueTableData}/>
        </div>
    )
};

export default SidebarRight;