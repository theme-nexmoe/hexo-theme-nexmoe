const { Component } = require("inferno");
const Background = require("./_partial/background");

module.exports = class extends Component {
	render() {
		const { config, page, theme, partial } = this.props;

		const language = page.lang || page.language || config.language;

		return (
			<html lang={language ? language.substr(0, 2) : ""}>
				<head
					dangerouslySetInnerHTML={{
						__html: partial("_partial/head"),
					}}
				></head>
				<body class="mdui-drawer-body-left">
					<Background {...this.props} />
					<div
						id="nexmoe-header"
						dangerouslySetInnerHTML={{
							__html: partial("_layout/single/header"),
						}}
					></div>
					<div
						id="nexmoe-content"
						dangerouslySetInnerHTML={{
							__html:
								partial("_layout/single/content") +
								partial("_partial/right"),
						}}
					></div>

					<div
						dangerouslySetInnerHTML={{
							__html: partial("_partial/searchbox"),
						}}
					></div>

					<div
						dangerouslySetInnerHTML={{
							__html: theme.slotFooter,
						}}
					></div>
				</body>
			</html>
		);
	}
};
