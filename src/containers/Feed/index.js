import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/pro-light-svg-icons";

import { sampleButtonClick } from "../../redux/modules/sample";

import Thumbnail from "../../components/Thumbnail";
import "./feed.scss";

class Feed extends Component {
    componentDidMount() {}

    render() {
        return (
            <section className="Feed">
                <section className="daily-videos">
                    <div className="section-title first">
                        sponsored <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
                    </div>
                    <div className="thumbnail-contain sponsor">
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                    </div>
                </section>

                <section className="daily-videos">
                    <div className="section-title">most viewed</div>
                    <div className="thumbnail-contain">
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
                    </div>
                </section>

                <section className="daily-videos">
                    <div className="section-title">trending</div>
                    <div className="thumbnail-contain">
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
                    </div>
                </section>

                <section className="daily-videos">
                    <div className="section-title">most talked about</div>
                    <div className="thumbnail-contain">
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
                    </div>
                </section>
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
