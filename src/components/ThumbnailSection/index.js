import React from "react";
import PropTypes from "prop-types";
import "./thumbnailcontainer.scss";

import Thumbnail from "../Thumbnail";
import SectionTitle from "./../SectionTitle";
import ViewMoreBtn from "./../ViewMoreBtn";

const ThumbnailSection = props => (
    <section className="ThumbnailSection">
        <SectionTitle titleText={props.titleText} haveSort={props.haveSort} from={props.from} updateSortFunc={props.updateSorting} />
        <div className={`thumbnail-contain ${props.extraStyle}`}>
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
        <ViewMoreBtn btnText={props.btnText} fetch={() => props.fetchMoreVideos(props.from)} />
    </section>
);

ThumbnailSection.propTypes = {
    from: PropTypes.string.isRequired,
    haveSort: PropTypes.bool.isRequired,
    fetchMoreVideos: PropTypes.func,
    titleText: PropTypes.string,
    btnText: PropTypes.string,
    extraStyle: PropTypes.string,
    updateSorting: PropTypes.func
};

export default ThumbnailSection;
