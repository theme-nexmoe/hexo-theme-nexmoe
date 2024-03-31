const { Component } = require('inferno');
const Background = require('./_partial/background');

module.exports = class extends Component {
    render() {
        const { config, page, theme, partial } = this.props;
        const language = page.lang || page.language || config.language;
        const layout = 'nexmoe';
        const bodyClass = layout === 'nexmoe' ? 'mdui-drawer-body-left' : '';
        const Body = require(`./_layout/${layout}/body`);
        const SearchBox = require('./_partial/searchbox');
        return (
            <html lang={language ? language.substr(0, 2) : ''}>
                <head
                    dangerouslySetInnerHTML={{
                        __html: partial('_partial/head')
                    }}
                ></head>
                <body class={layout + ' ' + bodyClass}>
                    <Background {...this.props} />
                    <Body {...this.props} />
                    <SearchBox {...this.props} />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: theme.slotFooter
                        }}
                    ></div>
                </body>
            </html>
        );
    }
};
