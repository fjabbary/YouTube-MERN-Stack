import React, { Component } from 'react';
import './styles/CommentItem.scss';

class CommentItem extends Component {
    render() {
        return (
            <div className="commentItem">
                <div className="commentItem__left">
                    <span className="commentItem__left--avatar"></span>
                </div>

                <div className="commentItem__middle">
                    <p> <span className="commentItem__middle--name">John Doe</span> <span className="commentItem__middle--date">737 days ago</span> </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam asperiores eius nesciunt natus saepe perspiciatis a error impedit soluta, quae molestias ea delectus libero ipsa velit cumque minima voluptatibus?</p>
                </div>

                <div className="commentItem__right">
                    <span className="commentItem__right--delete"><i className="fa fa-trash"></i></span>
                </div>
            </div>
        );
    }
}

export default CommentItem;
