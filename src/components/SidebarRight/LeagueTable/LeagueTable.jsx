import React from 'react';
import classes from './LeagueTable.module.css'
import {NavLink} from "react-router-dom";

const LeagueTable = (props) => {
    const TableTeam = (props) => {
        return (
            <tbody>
            <tr>
                <td>{props.pos}</td>
                <td className={classes.team}>{props.team}</td>
                <td>{props.games}</td>
                <td>{props.points}</td>
            </tr>
            </tbody>
        )
    };

    let TableRow = props.LeagueTableData.map(t => {
        return (
            <TableTeam pos={t.pos} team={t.team} games={t.games} points={t.points}/>
        )
    });

    return (
        <div className={classes.container}>
            <h2 className={classes.header}><NavLink to="/LeagueTableBig">Турнирная таблица</NavLink></h2>
            <table className={classes.table}>
                <thead>
                <tr>
                    <th>№</th>
                    <th className={classes.team}>Команда</th>
                    <th>Игры</th>
                    <th>Очки</th>
                </tr>
                </thead>
                {TableRow}
            </table>
        </div>
    )
};

export default LeagueTable;