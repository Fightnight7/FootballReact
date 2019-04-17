import React from 'react';
import classes from './Content.module.css';
import {NavLink} from "react-router-dom";


const Content = () => {

    return (
        <div className={classes.content}>
            <article className={classes.news}>
                <header className={classes.header}>
                    <NavLink to='/News'>Лига Чемпионов. Прогнозы на матчи среды </NavLink>
                </header>
                <img className={classes.img} src={require("../../images/pogba-messi.jpg")} alt=""/>
                <p className={classes.p}>В среду внимание поклонников английского футбола будет приковано к матчу
                    "Манчестер Юнайтед" и "Барселоны". Каталонский клуб считается фаворитом в этой паре, но МЮ уже
                    доказал на предыдущей стадии, что умеет добиваться результата за счет характера.</p>
                <footer className={classes.footer}>
                    <img src={require("../../images/date.gif")} alt=""/>
                    <p>10.04.2019</p>
                    {/*<textarea ref={textareaText}  className={classes.textarea}></textarea>*/}
                    <p>Комментировать (1)</p>
                </footer>
            </article>
        </div>
    )
};

export default Content;