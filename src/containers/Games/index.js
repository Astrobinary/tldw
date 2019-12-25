import React, { Component } from "react";
import { connect } from "react-redux";

import { sampleButtonClick } from "../../redux/modules/sample";

import "./games.scss";

class Games extends Component {
    componentDidMount() {}

    render() {
        return (
            <section className="Games">
                <div>Games</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Games);
