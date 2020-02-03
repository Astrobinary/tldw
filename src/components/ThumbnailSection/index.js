import React from "react";
import PropTypes from "prop-types";
import "./thumbnailsection.scss";

import Thumbnail from "../Thumbnail";
import SectionTitle from "./../SectionTitle";
import ViewMoreBtn from "./../ViewMoreBtn";

const ThumbnailSection = props => {
    if (props.videos === undefined) {
        return <span>Loading...</span>;
    }

    return (
        <section className="ThumbnailSection">
            <SectionTitle titleText={props.titleText} haveSort={props.haveSort} from={props.from} updateSortFunc={props.updateSorting} />
            <div className={`thumbnail-contain`} style={{ gridTemplateRows: `repeat(${props.rowDisplayNumber}, 1fr)` }}>
                {props.videos.map(video => (
                    <Thumbnail key={video.slug} {...video} />
                ))}
            </div>

            <ViewMoreBtn btnText={props.btnText} fetch={() => props.fetchMoreVideos(props.from)} rowDisplayStyle={props.rowDisplayStyle} />
        </section>
    );
};

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
