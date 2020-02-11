import React, { Component } from "react";
import PropTypes from "prop-types";
import VisibilitySensor from "react-visibility-sensor";
import "./thumbnailsection.scss";

import Thumbnail from "../Thumbnail";
import SectionTitle from "./../SectionTitle";
import ViewMoreBtn from "./../ViewMoreBtn";

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
                {thumbnails.slice(0, perRow * this.props.rowCount).map(video => (
                    <Thumbnail key={video.slug} {...video} />
                ))}

                {extra}
            </React.Fragment>
        );
    };

    render() {
        if (!this.props.videos) return <span>Loading...{this.props.titleText}</span>;
           
        


        let thumbnails = this.renderThumbnails();


       
        const videoLength = this.props.videos.length;
        const perRow = this.state.width / 304;
        const maxRows = Math.floor(videoLength / perRow);

       


        return (
            <section className="ThumbnailSection" ref={this.selectRef}>
                <SectionTitle titleText={this.props.titleText} haveSort={this.props.haveSort} from={this.props.from} updateSortFunc={this.props.updateSorting} />
                <div className={`thumbnail-contain`}>
                    <React.Fragment>{thumbnails}</React.Fragment>
                </div>
                {this.props.rowCount < maxRows ? <ViewMoreBtn btnText={this.props.btnText} fetch={() => this.props.showMoreVideos(this.props.from, this.selectRef)} rowCount={this.props.rowCount} /> : <ViewMoreBtn btnText="No more videos to see..." />}
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
