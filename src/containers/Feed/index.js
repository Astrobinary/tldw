import React, { Component } from "react";
import { connect } from "react-redux";

import { sampleButtonClick } from "../../Redux/modules/sample";

import Thumbnail from "../../components/Thumbnail";
import "./feed.scss";

// 480x272 thumbnail size

class Feed extends Component {
    componentDidMount() {}

    render() {
        return (
            <section>
                <Thumbnail />
                <button onClick={this.props.sampleButtonClick}>Test redux action</button>

                <pre>{JSON.stringify(this.props.sampleModule)}</pre>
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
