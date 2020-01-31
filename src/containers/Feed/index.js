import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMostViewed, fetchTrending, _updateViewSorting, _updateTalkSorting } from "../../redux/modules/feed";

import ThumbnailSection from "../../components/ThumbnailSection";
import Ad from "../../components/Ad";

import "./feed.scss";

class Feed extends Component {
    componentDidMount() {
        const mostViewed = this.props.mostViewed;
        // const trending = this.props.trending;

        if (mostViewed[mostViewed.currentSort].videos.length === 0) this.props.fetchMostViewed("day", "en", false, "");
        // if (trending[trending.currentSort].videos.length === 0) this.props.fetchTrending("day", "en", "");
    }

    fetchMoreVideos = section => {
        console.log(`Fetching more ${section} for ${this.props[section].currentSort}`);

        if (section === "mostViewed" && !this.hasError(this.props.mostViewed)) {
            console.log(this.hasError(this.props.mostViewed));
            const mostViewed = this.props.mostViewed;
            this.props.fetchMostViewed(mostViewed.currentSort, "en", true, `&cursor=${mostViewed[mostViewed.currentSort].cursor}`);
        }
    };

    updateSorting = (from, newSort) => {
        if (from === "mostViewed") {
            const mostViewed = this.props.mostViewed;
            this.props.updateViewSorting(newSort);

            if (mostViewed[newSort].videos.length === 0) {
                this.props.fetchMostViewed(newSort, "en", false, "");
            }
        }

        if (from === "mostTalked") {
            this.props.updateTalkSorting(newSort);
        }

        console.log(`${from} is changing sort to ${newSort}`);
    };

    hasError = sectionObj => {
        if (sectionObj[sectionObj.currentSort].error === false) {
            return false;
        } else {
            return true;
        }
    };

    render() {
        const mostViewed = this.props.mostViewed;
        const currentSort = mostViewed[mostViewed.currentSort];
        console.log(currentSort.rowDisplayNumber);

        return (
            <section className="Feed">
                <ThumbnailSection titleText="sponsored clips" from="sponsored" haveSort={false} extraStyle="sponsor" />
                <ThumbnailSection titleText="most viewed" from="mostViewed" btnText="keep them coming" rowDisplayNumber={currentSort.rowDisplayNumber} haveSort={true} fetchMoreVideos={this.fetchMoreVideos} updateSorting={this.updateSorting} videos={mostViewed[mostViewed.currentSort].videos} />
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
    mostTalked: state.feedModule.mostTalked
});

const mapDispatchToProps = dispatch => ({
    fetchMostViewed: (timeSort, language, appendVideos, cursor) => dispatch(fetchMostViewed(timeSort, language, appendVideos, cursor)),
    fetchTrending: (timeSort, language, appendVideos, cursor) => dispatch(fetchTrending(timeSort, language, appendVideos, cursor)),
    updateViewSorting: newSort => dispatch(_updateViewSorting(newSort)),
    updateTalkSorting: newSort => dispatch(_updateTalkSorting(newSort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
