"use strict";

function imageAutoLazyloadHelper(content) {
	var str = content.replace(
		/<img.*?src="(.*?)" alt="(.*?)".*?\/?>/gi,
		'<img data-fancybox="gallery" data-sizes="auto" data-src="$1" alt="$2" class="lazyload">'
	);
	return str;
}
hexo.extend.helper.register("image_auto_lazyload", imageAutoLazyloadHelper);
