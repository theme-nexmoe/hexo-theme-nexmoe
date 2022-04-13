"use strict";

hexo.extend.tag.register(
	"gallery",
	function (args, content) {
		return `<p><div class="justified-gallery">${content
			.replace(/<br>/gi, "")
			.replace(/<p>/gi, "")
			.replace(/<p\/?>/gi, "")
			.replace(
				/!\[(.*?)\]\((.*?)\)/gm,
				'<div><img alt="$1" src="$2" data-caption="$1" data-fancybox="gallery" loading="lazy"></div>'
			)}
            </div></p>`;
	},
	{ ends: true }
);
