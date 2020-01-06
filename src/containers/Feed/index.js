import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/pro-light-svg-icons";

import { initialFetch } from "../../redux/modules/feed";

import Thumbnail from "../../components/Thumbnail";
import "./feed.scss";

class Feed extends Component {
    componentDidMount() {
        this.props.initialFetch();
    }

    render() {
        return (
            <section className="Feed">
                <section className="daily-videos">
                    <div className="section-title">
                        sponsored clips
                        <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
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
    feed: state.feedModule
});

const mapDispatchToProps = dispatch => ({
    initialFetch: () => dispatch(initialFetch())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
