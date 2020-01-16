import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/pro-light-svg-icons";

import { initialFetch, updateViewSorting, updateTalkSorting } from "../../redux/modules/feed";

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

    // Called from section title component
    updateSorting = (from, newSort) => {
        if (from === "mostViewed") this.props.updateViewSorting(newSort);
        if (from === "mostTalked") this.props.updateTalkSorting(newSort);
        console.log(`${from} is changing sort to ${newSort}`);
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
                    <SectionTitle text="most viewed" haveSort={true} from="mostViewed" updateSortFunc={this.updateSorting} />
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

                <section className="ad-container">
                    <div className="ad">sample ad 970x90</div>
                </section>

                <section className="feed-videos">
                    <SectionTitle text="newly trending" from="trending" haveSort={false} updateSortFunc={this.updateSorting} />
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
                    <SectionTitle text="most talked about" haveSort={true} from="mostTalked" updateSortFunc={this.updateSorting} />
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

                <section className="ad-container">
                    <div className="ad">sample ad 728x90</div>
                </section>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    feed: state.feedModule
});

const mapDispatchToProps = dispatch => ({
    initialFetch: () => dispatch(initialFetch()),
    updateViewSorting: sort => dispatch(updateViewSorting(sort)),
    updateTalkSorting: sort => dispatch(updateTalkSorting(sort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
