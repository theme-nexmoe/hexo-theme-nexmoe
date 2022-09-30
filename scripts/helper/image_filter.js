"use strict";

hexo.extend.filter.register("after_post_render", function (data) {
	const { config: themeCfg } = this.theme;

	data.content = data.content.replace(
		/<img.*?src="(.*?)" alt="(.*?)".*?\/?>/gi,
		'<img onerror="imgOnError(this);" data-fancybox="gallery" src="$1" alt="$2" data-caption="$2" loading="lazy">'
	);

	if (themeCfg.imageCDN.enable) {
		data.content = data.content.replace(
			new RegExp(themeCfg.imageCDN.origin, "gm"),
			themeCfg.imageCDN.to
		);
	}

	return data;
});
