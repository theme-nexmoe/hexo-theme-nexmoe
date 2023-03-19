const { Component } = require("inferno");
const Background = require("./_partial/background");

module.exports = class extends Component {
	render() {
		const { config, page, theme, partial } = this.props;
		const language = page.lang || page.language || config.language;
		const layout = "nexmoe";
		const bodyClass = layout === "nexmoe" ? "mdui-drawer-body-left" : "";
		const Content = require(`./_layout/${layout}/content`);
		const Footer = require(`./_layout/${layout}/footer`);

		return (
			<html lang={language ? language.substr(0, 2) : ""}>
				<head
					dangerouslySetInnerHTML={{
						__html: partial("_partial/head"),
					}}
				></head>
				<body class={layout + " " + bodyClass}>
					<Background {...this.props} />
					<div
						id="nexmoe-header"
						dangerouslySetInnerHTML={{
							__html: partial("_layout/nexmoe/header"),
						}}
					></div>
					<div id="nexmoe-content">
						<Content {...this.props} />
						<div
							class="nexmoe-post-right"
							dangerouslySetInnerHTML={{
								__html: partial("_partial/right"),
							}}
						></div>
					</div>

					<div
						dangerouslySetInnerHTML={{
							__html: partial("_partial/searchbox"),
						}}
					></div>

					<div id="nexmoe-footer">
						<Footer {...this.props} />
					</div>

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
