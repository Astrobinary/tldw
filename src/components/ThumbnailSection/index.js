import React, { Component } from "react";
import PropTypes from "prop-types";
import "./thumbnailsection.scss";

import Thumbnail from "../Thumbnail";
import SectionTitle from "./../SectionTitle";
import ViewMoreBtn from "./../ViewMoreBtn";
import { Link } from "react-router-dom";

class ThumbnailSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: null
        };

        this.selectRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener("resize", () => this.updateDimensions());
        this.updateDimensions();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", () => {});
    }

    updateDimensions() {
        if (!this.selectRef) return;

        if (this.selectRef.current !== null) {
            const width = this.selectRef.current.clientWidth;
            const perRow = Math.floor(this.selectRef.current.clientWidth / 304);
            this.setState({ width, perRow });
        }
    }

    renderThumbnails = () => {
        let extra = [];
        let thumbnails = this.props.videos;
        let amount = 0;
        let perRow = 0;

        if (this.selectRef) {
            if (this.selectRef.current === null) return null;
            perRow = Math.floor(this.selectRef.current.clientWidth / 304);
            amount = perRow - (thumbnails.length % perRow);
        }

        for (let i = 0; i < amount; i++) {
            extra.push(<div key={i} style={{ width: "300px" }} />);
        }

        return (
            <React.Fragment>
                {thumbnails.slice(0, perRow * this.props.rowCount).map((video, index) => (
                    <Link key={video.slug} to={{ pathname: `${this.props.router.location.pathname}/${video.slug}`, state: { videos: thumbnails, current: index } }}>
                        <Thumbnail {...video} />
                    </Link>
                ))}

                {extra}
            </React.Fragment>
        );
    };

    fetchMoreVideos = () => {
        this.props.fetchMoreVideos(this.props.from);
        return <ViewMoreBtn btnText="fetching more videos..." />;
    };

    render() {
        if (!this.props.videos) return <span>Loading...{this.props.titleText}</span>;

        let thumbnails = this.renderThumbnails();

        const videoLength = this.props.videos.length;
        const perRow = this.state.width / 304;
        const maxRows = Math.floor(videoLength / perRow);

        return (
            <section className="ThumbnailSection" ref={this.selectRef}>
                <SectionTitle titleText={this.props.titleText} haveSort={this.props.haveSort} from={this.props.from} currentSort={this.props.currentSort} updateSortFunc={this.props.updateSorting} />
                <div className={`thumbnail-contain`}>
                    <React.Fragment>{thumbnails}</React.Fragment>
                </div>
                {this.props.rowCount < maxRows ? <ViewMoreBtn btnText={this.props.btnText} fetch={() => this.props.showMoreVideos(this.props.from, this.selectRef)} rowCount={this.props.rowCount} /> : this.fetchMoreVideos()}
            </section>
        );
    }
}

ThumbnailSection.propTypes = {
    from: PropTypes.string.isRequired,
    haveSort: PropTypes.bool.isRequired,
    fetchMoreVideos: PropTypes.func,
    titleText: PropTypes.string,
    btnText: PropTypes.string,
    updateSorting: PropTypes.func
};

export default ThumbnailSection;
