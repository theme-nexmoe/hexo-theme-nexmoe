"use strict";

const toObject = (args = "height:160px") => {
	try {
		let arr = args.split(" ");
		let obj = {};
		for (var i = 0; i < arr.length; i++) {
			let item = arr[i].split(":");
			obj[item[0]] = item[1];
		}
		return obj;
	} catch (e) {
		console.log(e);
	}
};

hexo.extend.tag.register(
	"gallery",
	function (args, content) {
		const params = toObject(args.join(" "));
		const width = params.width || 200;
		return `<p><div class="gallery-pro" style="column-width:${width}px;">${content
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
