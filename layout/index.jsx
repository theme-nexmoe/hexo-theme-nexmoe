const { Component } = require("inferno");

module.exports = class extends Component {
	render() {
		const { partial } = this.props;
		return (
			<div>
				<section class="nexmoe-posts" dangerouslySetInnerHTML={{ __html: partial("_index/list") }}></section>
                <div dangerouslySetInnerHTML={{ __html: partial("_partial/paginator") }}></div>
			</div>
		);
	}
};
