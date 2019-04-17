import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    const TeamLogos = (props) => {
        return (
            <div>
                <NavLink to="/ManUnited">
                    <img className={classes.logo} src={require("../../images/teamlogos/" + props.name + ".png")} alt=""/>
                </NavLink>
            </div>
        )
    };

    let TeamsHeaders = props.TeamsData.map (t => <TeamLogos name={t.name}/>);

    return (
        <header className={classes.header}>
            <NavLink to="/">
                <img className={classes.img}
                     src={require("../../images/premier-league.png")}
                     alt=""/>
            </NavLink>
            <h2 className={classes.title}>Свежие новости про Английский футбол</h2>
            <div className={classes.teamLogos}>
                {TeamsHeaders}
            </div>
        </header>
    )
};


export default Header;