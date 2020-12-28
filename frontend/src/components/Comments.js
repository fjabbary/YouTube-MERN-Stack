import React, { Component } from 'react';
import './styles/Comments.scss';
import CommentItem from './CommentItem';

class Comments extends Component {
    render() {
        return (
            <div className="comments">
                <p><b><span className="comments__count">3</span> Comment</b></p>
                <div className="comments__input">

                    <form>
                        <img src="./assets/Images/Mohan-muruge.jpg" alt="" className="comments__input--avatar" />
                        <input type="text" className="comments__input--input" />
                        <button className="comments__input--btn">COMMENT</button>
                    </form>
                </div>

                <CommentItem />


            </div>
        );
    }
}

export default Comments;
