const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { config, theme, url_for } = this.props;

        return (
            <div id="nexmoe-background">
                <div
                    class="nexmoe-bg"
                    style={`background-image: url(${theme.background.path})`}
                ></div>
                <div class="mdui-appbar mdui-shadow-0">
                    <div class="mdui-toolbar">
                        <a
                            // eslint-disable-next-line react/no-unknown-property
                            mdui-drawer="{target: '#drawer', swipe: true}"
                            title="menu"
                            class="mdui-btn mdui-btn-icon mdui-ripple"
                        >
                            <i class="mdui-icon nexmoefont icon-menu"></i>
                        </a>
                        <div class="mdui-toolbar-spacer"></div>
                        <a
                            href={url_for()}
                            title={config.author || config.title}
                            class="mdui-btn mdui-btn-icon"
                        >
                            <img
                                src={theme.avatar }
                                alt={config.author || config.title}
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};
