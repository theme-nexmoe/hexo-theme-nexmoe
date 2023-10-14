const Paginator = require('./_partial/paginator');
const { Component, Fragment } = require('inferno');

module.exports = class extends Component {
    render() {
        const { page, partial } = this.props;
        return (
            <Fragment>
                <section
                    class="nexmoe-posts"
                    dangerouslySetInnerHTML={{ __html: partial('_index/list') }}
                ></section>
                {page.total > 1 ? <Paginator {...this.props} /> : ''}
            </Fragment>
        );
    }
};
