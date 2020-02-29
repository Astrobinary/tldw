import React, { Component, ReactDOM } from "react";

import ReactPlayer from 'react-player'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSearch } from "@fortawesome/pro-light-svg-icons";

import "./videoplayer.scss";



class VideoPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = { width: null };

        this.videoRef = React.createRef();
    }

    checkRef = () => {
        console.log(this.videoRef)
        var iframe = document.getElementById('myFrame');



        var element = iframe.contentWindow.document;

        console.log(element)


    }


    render() {


        return (
            < section className="VideoPlayer" >
                {this.props.title}

                <iframe allowFullScreen id="myFrame" src={this.props.embed_url} frameBorder="0" title={this.props.title} scrolling="no" ref={this.videoRef} />

                <button onClick={this.checkRef}></button>
            </section >
        );
    }
}



export default VideoPlayer;
