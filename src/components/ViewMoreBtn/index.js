import React, { Component } from "react";

import "./viewmore.scss";

class ViewMoreBtn extends Component {
    constructor(props) {
        super(props);

        this.state = { currentCount: this.props.rowDisplay };
    }

    updateCount = e => {
        this.props.fetch();
        console.log(this.props.rowDisplay);
        e.target.previousSibling.setAttribute("style", this.props.rowDisplayStyle);
        // this.setState({ currentCount: this.state.currentCount + 2 });
    };

    render() {
        if (this.props.btnText === undefined) return null;

        return (
            <div className="View-More" onClick={this.updateCount}>
                {this.props.btnText}
            </div>
        );
    }
}

export default ViewMoreBtn;
