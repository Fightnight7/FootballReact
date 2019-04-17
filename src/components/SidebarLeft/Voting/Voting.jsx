import React from 'react';
import classes from './Voting.module.css';


const Voting = () => {
    return (
        <div className={classes.voting}>
            <h3 className={classes.header}>Голосуем!</h3>
            <h4 className={classes.title}>Самая титулованая команда Англии?</h4>
            <div className={classes.teams}>
                <div className="team1">
                    <label htmlFor="team1">Ливерпуль</label>
                    <input type="radio" className={classes.input} name="team" id="team1"/>
                </div>
                <div className="team2">
                    <label htmlFor="team2">Манчестер Юнайтед</label>
                    <input type="radio" className={classes.input} name="team" id="team2"/>
                </div>
                <button className={classes.button}>Голосовать!</button>
            </div>
        </div>
    )
};

export default Voting;