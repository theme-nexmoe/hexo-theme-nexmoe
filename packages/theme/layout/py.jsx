const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { page, theme } = this.props;
        return (
            <div class="nexmoe-post">
                <article
                    class="nexmoe-py"
                    dangerouslySetInnerHTML={{ __html: page.content }}
                ></article>
                {page.comments
                    ? <div
                        class="nexmoe-post-footer"
                        dangerouslySetInnerHTML={{ __html: theme.slotComment }}
                    ></div>
                    : ''
                }
            </div>
        );
    }
};
