const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { paginator } = this.props;

        return (
            <nav
                class="nexmoe-page-nav"
                dangerouslySetInnerHTML={{
                    __html: paginator({
                        prev_text: '<i class="nexmoefont icon-left"></i>',
                        next_text: '<i class="nexmoefont icon-right"></i>',
                        escape: false
                    })
                }}
            ></nav>
        );
    }
};
