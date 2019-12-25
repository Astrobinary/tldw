import React, { Component } from "react";
import { connect } from "react-redux";

import { sampleButtonClick } from "../../redux/modules/sample";

import "./streamers.scss";

class Streamers extends Component {
    componentDidMount() {}

    render() {
        return (
            <section className="Streamers">
                <div>Streamers</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Streamers);
