import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SidebarLeft from './components/SidebarLeft/SidebarLeft';
import SidebarRight from './components/SidebarRight/SidebarRight';
import Footer from './components/Footer/Footer';
import LeagueTableBig from "./components/Content/LeagueTableBig/LeagueTableBig";
import {Route} from "react-router-dom";
import ManchesterUnited from "./components/Content/TeamsDescription/ManchesterUnited";
import News from "./components/Content/News/News";

const App = (props) => {
    return (
            <div className="main">
                <Header TeamsData={props.state.TeamsData} />
                <SidebarLeft newsSearch={props.newsSearch} Search={props.state.NewsSearch}/>
                <Route exact path='/' render={()=><Content/>}/>
                <Route path='/LeagueTableBig' render={()=><LeagueTableBig/>}/>
                <Route path='/ManUnited' render={()=><ManchesterUnited/>}/>
                <Route path='/News' render={()=><News Comments={props.state.Comments} CommentRow={props.CommentRow} giveTextarea={props.giveTextarea}/>}/>
                <SidebarRight LeagueTableData={props.state.LeagueTableData}/>
                <Footer/>
            </div>
    )
};

export default App;
