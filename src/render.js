import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {giveTextarea, newsSearch} from './redux/state'
import {BrowserRouter} from "react-router-dom";
import {CommentRow} from "./redux/state";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} CommentRow={CommentRow} giveTextarea={giveTextarea} newsSearch={newsSearch}/>
        </BrowserRouter>, document.getElementById('root'));
};

export default rerenderEntireTree;

