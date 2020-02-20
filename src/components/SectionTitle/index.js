import React, { Component } from "react";

import Sponsor from "../Sponsor";

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

    componentDidMount() {
        this.props.updateSortFunc(this.props.from, this.props.currentSort);
    }

    toggleMenu = () => {
        this.setState({ showMenu: !this.state.showMenu });
    };

    updateMenu = newSort => {
        this.props.updateSortFunc(this.props.from, newSort.key);
        this.setState({ currentSort: newSort });
        this.toggleMenu();
    };

    getSortText = () => {
        const key = this.props.currentSort;
        const current = this.state.list.filter(obj => obj.key === key);
        return current[0].text;
    };

    render() {
        if (!this.props.haveSort)
            return (
                <div className="section-title">
                    {this.props.titleText} {this.props.from === "sponsored" ? <Sponsor /> : null}
                </div>
            );

        const filterSort = this.state.list.filter(item => item.id !== this.state.currentSort.id);

        const mappedSort = filterSort.map(item => (
            <span key={item.id} onClick={() => this.updateMenu(item)} className="sort-item">
                {item.key}
            </span>
        ));

        return (
            <div className="section-title">
                {this.props.titleText}
                <span className="current-item" onClick={() => this.toggleMenu()}>
                    {this.getSortText()} {this.props.from === "sponsored" ? <Sponsor /> : null}
                </span>
                {this.state.showMenu ? mappedSort : null}
            </div>
        );
    }
}

export default SectionTitle;
