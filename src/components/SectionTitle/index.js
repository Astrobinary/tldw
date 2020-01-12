import React, { Component } from "react";
import { connect } from "react-redux";

import "./sectiontitle.scss";

class SectionTitle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false,
            currentSort: {
                id: 0,
                text: "today",
                key: "day"
            },
            list: [
                {
                    id: 0,
                    text: "today",
                    key: "day"
                },
                {
                    id: 1,
                    text: "this week",
                    key: "week"
                },
                {
                    id: 2,
                    text: "this month",
                    key: "month"
                },
                {
                    id: 3,
                    text: "of all time",
                    key: "all"
                }
            ]
        };
    }

    toggleMenu() {
        this.setState({ showMenu: !this.state.showMenu });
    }
    updateMenu(newSort) {
        this.setState({ currentSort: newSort });
        this.toggleMenu();
    }

    render() {
        const filterSort = this.state.list.filter(item => item.id !== this.state.currentSort.id);
        const mappedSort = filterSort.map(item => (
            <span key={item.id} onClick={() => this.updateMenu(item)} className="sort-item">
                {item.key}
            </span>
        ));

        return (
            <React.Fragment>
                <div className="section-title">
                    {this.props.text}
                    <span className="current-item" onClick={() => this.toggleMenu()}>
                        {this.state.currentSort.text}
                    </span>
                    {this.state.showMenu ? mappedSort : null}
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SectionTitle);
