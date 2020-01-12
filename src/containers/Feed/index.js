import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/pro-light-svg-icons";

import { initialFetch } from "../../redux/modules/feed";

import Thumbnail from "../../components/Thumbnail";
import SectionTitle from "../../components/SectionTitle";
import ViewMoreBtn from "../../components/ViewMoreBtn";

import "./feed.scss";

class Feed extends Component {
    componentDidMount() {
        this.props.initialFetch();
    }

    fetchMoreVideos = () => {
        console.log("Here i should fetch.");
    };

    render() {
        return (
            <section className="Feed">
                <section className="feed-videos">
                    <div className="section-title first-section-title">
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

                <section className="feed-videos">
                    <SectionTitle text="most viewed" />
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
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                    </div>
                    <ViewMoreBtn text="keep them coming" fetch={this.fetchMoreVideos} />
                </section>

                <section className="feed-videos">
                    <SectionTitle text="trending" updateSortFunc={this.updateSort} />
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
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                        <Thumbnail />
                    </div>
                    <ViewMoreBtn text="see what else is new" fetch={this.fetchMoreVideos} />
                </section>

                <section className="feed-videos">
                    <SectionTitle text="most talked about" />
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
                    <ViewMoreBtn text="look for more drama" fetch={this.fetchMoreVideos} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
