"use strict";

hexo.extend.tag.register(
	"links",
	function (args, content) {
		let items = "";
		let data = JSON.parse(content);
		let tooltip = "";
		for (let i = 0; i < data.length; i++) {
			tooltip = data[i].des
				? `mdui-tooltip="{content: '${data[i].des}'}"`
				: "";
			items =
				items +
				`
				<li ${tooltip}>
					<a target="_blank" href="${data[i].link}" title="${data[i].title}">
						<img src="${data[i].img}" alt="${data[i].title}" >
					</a>
				</li>`;
		}

		let html = `<div class="nexmoe-py"><ul>${items}</ul></div>`;
		return html;
	},
	{ ends: true }
);
