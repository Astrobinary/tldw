import React, { Component } from "react";
import { connect } from "react-redux";

import { sampleButtonClick } from "../../redux/modules/sample";

import "./playlists.scss";

class Playlists extends Component {
    componentDidMount() {}

    render() {
        return (
            <section className="Playlists">
                <div className="section-title">most popular</div>
                <section className="playlist-container"></section>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    sampleButtonClick: () => dispatch(sampleButtonClick())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlists);
