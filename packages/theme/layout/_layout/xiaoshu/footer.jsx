const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { config, date, theme, __ } = this.props;

        return (
            <Fragment>
                <div class="nexmoe-container">
					&copy; {date(new Date(), 'YYYY')}{' '}
                    {config.author || config.title}
                    {__('Powered by')}
                    <a href="http://hexo.io/" target="_blank" rel="noopener">
						Hexo
                    </a>
					&
                    <a
                        href="https://github.com/theme-nexmoe/hexo-theme-nexmoe"
                        target="_blank" rel="noopener"
                    >
						Nexmoe
                    </a>
                    <div
                        dangerouslySetInnerHTML={{ __html: theme.slotSidebar }}
                    ></div>
                </div>
            </Fragment>
        );
    }
};
