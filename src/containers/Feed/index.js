import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMostViewed, _viewMoreVisibility, _setRowCount, _updateViewSorting, _updateTalkSorting } from "../../redux/modules/feed";

import ThumbnailSection from "../../components/ThumbnailSection";
import Ad from "../../components/Ad";

import "./feed.scss";

class Feed extends Component {
    componentDidMount() {
        const mostViewed = this.props.mostViewed;
        if (mostViewed[mostViewed.currentSort].videos.length === 0 && !mostViewed[mostViewed.currentSort].isFetching) this.props.fetchMostViewed("day", "", false, "");
    }

    showMoreVideos = (from, ref) => {
        const section = this.props[from];
        const currentSort = section.currentSort;
        const videoLength = section[currentSort].videos.length;
        const perRow = ref.current.clientWidth / 304;
        const maxRows = Math.floor(videoLength / perRow);

        let newCount = section[currentSort].rowCount;

        if (section[currentSort].rowCount <= maxRows) {
            if (newCount + 2 > maxRows ? newCount++ : (newCount += 2));

            console.log(`Showing more ${from} for ${this.props[from].currentSort}`);
            this.props.setRowCount(from, currentSort, newCount);
        }
    };

    fetchMoreVideos = from => {
        if (this.props[from][this.props[from].currentSort].cursor === "") return;

        if (!this.props[from][this.props[from].currentSort].isFetching) {
            this.props.fetchMostViewed(this.props[from].currentSort, "", true, `&cursor=${this.props[from][this.props[from].currentSort].cursor}`);
        }
    };

    updateSorting = (from, newSort) => {
        if (from === "mostViewed") {
            const mostViewed = this.props.mostViewed;
            this.props.updateViewSorting(newSort);

            if (mostViewed[newSort].videos.length === 0) {
                this.props.fetchMostViewed(newSort, "", false, "");
            }
        }

        if (from === "mostTalked") {
            this.props.updateTalkSorting(newSort);
        }

        console.log(`${from} is changing sort to ${newSort}`);
    };

    dispatchViewMoreVisibility = from => {
        this.props.viewMoreVisibility(from, this.props[from].currentSort);
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

        return (
            <section className="Feed">
                <ThumbnailSection titleText="sponsored clips" from="sponsored" haveSort={false} extraStyle="sponsor" />
                <ThumbnailSection router={this.props.router} currentSort={mostViewed.currentSort} titleText="most viewed" from="mostViewed" btnText="keep them coming" rowCount={currentSort.rowCount} viewMore={currentSort.viewMore} viewMoreVisibility={this.dispatchViewMoreVisibility} haveSort={true} showMoreVideos={this.showMoreVideos} fetchMoreVideos={this.fetchMoreVideos} updateSorting={this.updateSorting} videos={mostViewed[mostViewed.currentSort].videos} />
                <Ad />
                <ThumbnailSection titleText="newly trending" from="trending" btnText="see what else is new" haveSort={false} showMoreVideos={this.showMoreVideos} updateSorting={this.updateSorting} />
                <Ad />
                <ThumbnailSection titleText="most talked about" from="mostTalked" btnText="look for more drama" haveSort={true} showMoreVideos={this.showMoreVideos} updateSorting={this.updateSorting} />
            </section>
        );
    }
}

const mapStateToProps = state => ({
    sponsored: state.feedModule.sponsored,
    mostViewed: state.feedModule.mostViewed,
    trending: state.feedModule.trending,
    mostTalked: state.feedModule.mostTalked,
    router: state.router
});

const mapDispatchToProps = dispatch => ({
    fetchMostViewed: (timeSort, language, appendVideos, cursor) => dispatch(fetchMostViewed(timeSort, language, appendVideos, cursor)),
    updateViewSorting: newSort => dispatch(_updateViewSorting(newSort)),
    updateTalkSorting: newSort => dispatch(_updateTalkSorting(newSort)),
    setRowCount: (from, timeSort, newHight) => dispatch(_setRowCount(from, timeSort, newHight)),
    viewMoreVisibility: (from, currentSort) => dispatch(_viewMoreVisibility(from, currentSort))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feed);
