import React from "react";
import classes from "./News.module.css";
import Content from "../Content";
import {giveTextarea} from "../../../redux/state";

const News = (props) => {

    let addComment = () =>{
        props.CommentRow(props.Comments.TextareaComment);
        newComment.current.value = "";
        giveTextarea(newComment.current.value);
    };

    let newComment = React.createRef();

    const AllComments = (props) => {
        return (
            <div className={classes.allComments}>
                <div className={classes.commentUser}>{props.user}</div>
                <div className={classes.commentText}>{props.text}</div>
            </div>
        )
    };

    let CommentsRow = props.Comments.AllComments.map(t => {
        return (
            <AllComments id={t.id} user={t.user} text={t.text}/>
        )
    });

    let getTextarea = () => {
        let comment = newComment.current.value;
        giveTextarea(comment);
    };

    return (
        <div className="content">
            <Content/>
            <div className={classes.commentsBlock}>
                <div className={classes.addComment}>
                    <div className={classes.name}>Max</div>
                    <textarea onChange={getTextarea} ref={newComment} className={classes.textarea} value={props.Comments.TextareaComment}/>
                    <button onClick={addComment} className={classes.button}>Send</button>
                </div>
                {CommentsRow}
            </div>
        </div>
    )
};

export default News;