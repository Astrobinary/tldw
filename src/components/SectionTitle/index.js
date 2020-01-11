import React from "react";

import "./sectiontitle.scss";

let sorting = [
    {
        id: 0,
        text: "today",
        selected: true,
        key: "day"
    },
    {
        id: 1,
        text: "this week",
        selected: false,
        key: "week"
    },
    {
        id: 2,
        text: "this month",
        selected: false,
        key: "month"
    },
    {
        id: 3,
        text: "of all time",
        selected: false,
        key: "all"
    }
];

const SectionTitle = props => (
    <React.Fragment>
        <div className="section-title">{props.text}</div>
    </React.Fragment>
);

export default SectionTitle;
