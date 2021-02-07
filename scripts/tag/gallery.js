"use strict";

hexo.extend.tag.register(
	"gallery",
	function (args, content) {
		return `<p><div class="justified-gallery">${hexo.render
			.renderSync({
				text: content,
				engine: "markdown",
			})
			.replace(/<br>/gi, "")
			.replace(/<p>/gi, "")
			.replace(/<p\/?>/gi, "")
			.replace(
				/<img.*?src="(.*?)" alt="(.*?)".*?\/?>/gi,
				'<div><img alt="$2" src="$1" data-src="$1" data-fancybox="gallery"></div>'
			)}
            </div></p>`;
	},
	{ ends: true }
);
