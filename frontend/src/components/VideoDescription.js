import React, { Component } from 'react';
import './styles/VideoDescription.scss'

class VideoDescription extends Component {
    render() {
        return (
            <div className="videoDescription">
                <h1><b>Lorem ipsum dolor sit amet.</b></h1>

                <div className="videoDescription__details">
                    <div className="videoDescription__details--left">
                        <span><b>By Red Cow</b></span>
                        <span>737 days ago</span>
                    </div>
                    <div className="videoDescription__details--right">
                        <img src="./assets/Icons/SVG/Icon-views.svg" /><span className="videoDescription__details--rightViews">1,000,231</span>
                        <img src="./assets/Icons/SVG/Icon-likes.svg" /><span>1,000</span>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis recusandae minus quidem velit laboriosam? Totam, cumque architecto! Voluptate quas libero perspiciatis exercitationem recusandae ex natus quaerat, repellat nemo. Doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint commodi magnam molestias cupiditate tempore ducimus numquam doloremque rerum ullam, blanditiis odio amet magni libero voluptates, eum hic quisquam mollitia nisi!</p>

            </div>
        );
    }
}

export default VideoDescription;
