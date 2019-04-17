import React from 'react';
import classes from './SidebarNav.module.css';
import {NavLink} from "react-router-dom";

const SidebarNav = (props) => {

    let wordSearch = React.createRef();

    let getSearch = () => {
        let search = wordSearch.current.value;
        props.newsSearch(search);
    };



    return (
        <nav className={classes.nav}>
            <h3 className={classes.header}>Навигация</h3>
            <ul className={classes.ul}>
                <li className={classes.li}><NavLink to="/">Главная</NavLink></li>
                <li className={classes.li}>Премьер Лига</li>
                <li className={classes.li}>Лига Чемпионов</li>
                <li className={classes.li}>Кубок Англии</li>
                <li className={classes.li}>Кубок Лиги</li>
                <li className={classes.li}>Сборная Англии</li>
            </ul>
            <input onChange={getSearch} className={classes.input} ref={wordSearch} type="text" value={props.Search}/>
            {/*<button onClick={showResult}>Search</button>*/}
            <div className={classes.search}>
                <p>searchresult</p>
            </div>
        </nav>
    )
};

export default SidebarNav;