const { Component } = require("inferno");
const Paginator = require("./_partial/paginator");

module.exports = class extends Component {
	render() {
		const { page, partial } = this.props;
		return (
			<>
				<section
					class="nexmoe-posts"
					dangerouslySetInnerHTML={{ __html: partial("_index/list") }}
				></section>
				{page.total > 1 ? <Paginator {...this.props} /> : ""}
			</>
		);
	}
};
