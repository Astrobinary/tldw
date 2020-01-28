import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMostViewed, fetchTrending, _updateViewSorting, _updateTalkSorting } from "../../redux/modules/feed";

import ThumbnailSection from "../../components/ThumbnailSection";
import Ad from "../../components/Ad";

import "./feed.scss";

class Feed extends Component {
    componentDidMount() {
        const mostViewed = this.props.mostViewed;
        const trending = this.props.trending;

        if (mostViewed[mostViewed.currentSort].videos.length === 0) this.props.fetchMostViewed("day");
        if (trending[trending.currentSort].videos.length === 0) this.props.fetchTrending("day");
    }

    fetchMoreVideos = section => {
        console.log(`Fetching more ${section} for ${this.props[section].currentSort}`);
    };

    updateSorting = (from, newSort) => {
        if (from === "mostViewed") this.props.updateViewSorting(newSort);
        if (from === "mostTalked") this.props.updateTalkSorting(newSort);

        console.log(`${from} is changing sort to ${newSort}`);
    };

    render() {
        return (
            <section className="Feed">
                <ThumbnailSection titleText="sponsored clips" from="sponsored" haveSort={false} extraStyle="sponsor" />
                <ThumbnailSection titleText="most viewed" from="mostViewed" btnText="keep them coming" haveSort={true} fetchMoreVideos={this.fetchMoreVideos} updateSorting={this.updateSorting} />
                <Ad />
                <ThumbnailSection titleText="newly trending" from="trending" btnText="see what else is new" haveSort={false} fetchMoreVideos={this.fetchMoreVideos} updateSorting={this.updateSorting} />
                <Ad />
                <ThumbnailSection titleText="most talked about" from="mostTalked" btnText="look for more drama" haveSort={true} fetchMoreVideos={this.fetchMoreVideos} updateSorting={this.updateSorting} />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    sponsored: state.feedModule.sponsored,
    mostViewed: state.feedModule.mostViewed,
    trending: state.feedModule.trending,
    mostTalked: state.feedModule.mostTalked,
    initialFetch: state.feedModule.initialFetch
});

const mapDispatchToProps = dispatch => ({
    fetchMostViewed: timeSort => dispatch(fetchMostViewed(timeSort)),
    fetchTrending: timeSort => dispatch(fetchTrending(timeSort)),
    updateViewSorting: newSort => dispatch(_updateViewSorting(newSort)),
    updateTalkSorting: newSort => dispatch(_updateTalkSorting(newSort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
