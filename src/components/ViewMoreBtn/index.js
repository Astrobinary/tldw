import React from "react";

import "./viewmore.scss";

const ViewMoreBtn = props => {
    if (props.btnText === undefined) return null;

    return (
        <div className="View-More" onClick={props.fetch}>
            {props.btnText}
        </div>
    );
};

export default ViewMoreBtn;
