import React, { Component } from "react";
import { connect } from "react-redux";

import { sampleAction } from "../../Redux/actions/sampleAction";

import Thumbnail from "../../components/Thumbnail";
import "./feed.scss";

// 480x272 thumbnail size

class Feed extends Component {
    componentDidMount() {}

    simpleAction = event => {
        this.props.simpleAction();
    };

    render() {
        return (
            <section>
                <Thumbnail />
                <button onClick={this.simpleAction}>Test redux action</button>

                <pre>{JSON.stringify(this.props.simpleReducer)}</pre>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(sampleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
