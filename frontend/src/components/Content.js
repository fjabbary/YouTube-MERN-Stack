import React, { Component } from 'react';
import './styles/Content.scss'
import VideoDescription from './VideoDescription'
import Comments from './Comments'
import VideoList from './VideoList'

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content__left">
                    <VideoDescription />
                    <Comments />
                </div>
                <div className="content__right">
                    <VideoList />
                </div>
            </div>
        );
    }
}

export default Content;
