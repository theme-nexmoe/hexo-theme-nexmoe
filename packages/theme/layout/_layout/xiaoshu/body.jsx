const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { partial } = this.props;
        const Header = require('./header');
        const Content = require('./content');
        const Footer = require('./footer');

        return (
            <Fragment>
                <div id="nexmoe-header">
                    <Header {...this.props} />
                </div>
                <div id="nexmoe-content">
                    <div class="nexmoe-container">
                        <Content {...this.props} />
                        <div
                            class="nexmoe-post-right"
                            dangerouslySetInnerHTML={{
                                __html: partial('_partial/right')
                            }}
                        ></div>
                    </div>
                </div>

                <div id="nexmoe-footer">
                    <Footer {...this.props} />
                </div>
            </Fragment>
        );
    }
};
