import React, { Component } from 'react';
import './styles/Upload.scss'

class Upload extends Component {
    render() {
        return (
            <div className="upload">
                <h2>Upload Video</h2>

                <div className="upload__video">
                    <div className="upload__video--left">
                        <img src="./assets/Images/video-list-1.jpg" width="100%" />
                    </div>
                    <div className="upload__video--right">
                        <form>
                            <div>
                                <label htmlFor="title">Title:</label><br />
                                <input type="text" id="title" />
                            </div><br />
                            <div>
                                <label htmlFor="description">Description:</label><br />
                                <textarea id="description" cols="30" rows="10"></textarea>
                            </div>


                            <button id="publish">Publish</button>
                            <button id="cancel">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Upload;
