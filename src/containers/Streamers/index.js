import React, { Component } from "react";
import { connect } from "react-redux";
import "./streamers.scss";

// Dev
import avatar from "./sample_streamer.png";

//Actions
import { sampleButtonClick } from "../../redux/modules/sample";

class Streamers extends Component {
    componentDidMount() {}

    render() {
        return (
            <section className="Streamers">
                <div className="section-title">most views live</div>
                <section className="avatar-container">
                    <div className="icon">
                        <div className="streamer-name">Astrobinary</div>
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                </section>

                <div className="section-title">followed</div>
                <section className="avatar-container">
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                </section>

                <div className="section-title">randoms</div>
                <section className="avatar-container">
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>

                    <div className="icon">
                        <img src={avatar} alt="avatar" />
                    </div>
                </section>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    sampleButtonClick: () => dispatch(sampleButtonClick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Streamers);
