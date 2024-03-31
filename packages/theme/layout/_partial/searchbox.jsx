const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { __ } = this.props;
        return (
            <div id="nexmoe-search-space">
                <div class="search-container">
                    <div class="search-header">
                        <div class="search-input-container">
                            <input
                                class="search-input"
                                type="text"
                                placeholder={ __('search')}
                                onInput="sinput();"
                            />
                        </div>
                        <a class="search-close" onclick="sclose();">
							×
                        </a>
                    </div>
                    <div class="search-body"></div>
                </div>
            </div>
        );
    }
};
