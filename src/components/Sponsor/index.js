import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/pro-light-svg-icons";

import "./sponsor.scss";

const Sponsor = props => (
    <React.Fragment>
        <FontAwesomeIcon className="icon" icon={faQuestionCircle} />
    </React.Fragment>
);

export default Sponsor;
