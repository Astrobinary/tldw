import React, { Component } from "react";
import { connect } from "react-redux";

import { sampleButtonClick } from "../../redux/modules/sample";

import Thumbnail from "../../components/Thumbnail";
import "./feed.scss";

class Feed extends Component {
    componentDidMount() {}

    render() {
        return (
            <section className="Feed">
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                <Thumbnail />
                {/* <button onClick={this.props.sampleButtonClick}>Test redux action</button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
