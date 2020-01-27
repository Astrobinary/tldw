import React, { Component } from "react";

import "./viewmore.scss";

class ViewMoreBtn extends Component {
    constructor(props) {
        super(props);

        this.state = { currentCount: 2 };
    }

    updateCount = e => {
        this.props.fetch();
        e.target.previousSibling.setAttribute("style", `grid-template-rows: repeat(${this.state.currentCount + 2}, 1fr);`);
        this.setState({ currentCount: this.state.currentCount + 2 });
    };

    render() {
        if(this.props.btnText === undefined) return null;

        return (
            <div className="View-More" onClick={this.updateCount}>
                {this.props.btnText}
            </div>
        );
    }
}

export default ViewMoreBtn;
