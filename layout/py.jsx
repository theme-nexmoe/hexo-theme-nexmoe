const { Component } = require('inferno');

module.exports = class extends Component {
	render() {
		const { page } = this.props;
		return (
			<div class="nexmoe-post">
				<article class="nexmoe-py">{page.content}</article>
			</div>
		);
	}
};
