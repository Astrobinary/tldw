import React, { Component } from "react";
import { connect } from "react-redux";
import "./games.scss";

//Dev
import gameBox from "./sample_game.jpg";

//Actions
import { sampleButtonClick } from "../../redux/modules/sample";

class Games extends Component {
    componentDidMount() {}

    render() {
        return (
            <section className="Games">
                <div className="section-title">most popular</div>
                <section className="game-container">
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>

                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                </section>

                <div className="section-title">followed</div>
                <section className="game-container">
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>

                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
                    </div>
                    <div className="game">
                        <img src={gameBox} alt="game" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Games);
