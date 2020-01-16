import React, { Component } from "react";

class AdblockDetect extends Component {
    state = {
        usingAdblock: false
    };

    componentDidMount() {
        this.setState({ usingAdblock: this.fakeAdBanner.offsetHeight === 0 });
    }

    render() {
        if (this.state.usingAdblock === true) {
            return this.props.children;
        }

        return <div ref={r => (this.fakeAdBanner = r)} style={{ height: "100px", width: "100px", pointerEvents: "none" }} className="adBanner" />;
    }
}

export default AdblockDetect;
