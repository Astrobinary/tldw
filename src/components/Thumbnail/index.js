import React from "react";
import PropTypes from "prop-types";

import "./thumbnail.scss";

// Development assets
import avatar from "./avatar_sample.png";
import thumbnail from "./thumbnail_sample.jpg";

//Props needed:
//Avatar, View Count, Streamer name, Date Posted, Preview Thumbnail, Video Title

const Thumbnail = props => (
    <div className="Thumbnail">
        <section className="top-section">
            <img className="avatar" src={avatar} alt="avatar" />

            <div className="stats">
                <div className="text">69,696</div>
                <div className="text">Astrobinary</div>
            </div>

            <span className="date">2 days ago</span>
        </section>

        <img className="preview-image" src={thumbnail} alt="preview" />
        <div className="title">Random video title goes here.</div>
    </div>
);

Thumbnail.propTypes = {
    thumbnail: PropTypes.string,
    avatar: PropTypes.string
};

export default Thumbnail;
