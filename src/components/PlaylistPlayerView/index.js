import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./playlistplayerview.scss";

import VideoPlayer from "../VideoPlayer";

class PlaylistPlayerView extends Component {

    constructor(props) {
        super(props);

        if (!this.props.location.state) return this.props.history.push(`single${this.props.location.search}`)

        this.state = {
            videos: this.props.location.state.videos,
            index: parseInt(this.props.location.hash.substring(1))
        };

    }

    componentDidMount() {


    }


    render() {

        console.log(this.state.videos[this.state.index])

        return <section className="PlaylistPlayerView">PlaylistPlayerView

    <VideoPlayer {...this.state.videos[this.state.index]} />
        </section>;
    }
}

export default PlaylistPlayerView;
