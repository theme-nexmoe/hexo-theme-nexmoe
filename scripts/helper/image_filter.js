"use strict";

hexo.extend.filter.register('after_post_render', function(data){
	const { config: themeCfg } = this.theme;

	data.content = data.content.replace(
		/<img.*?src="(.*?)" alt="(.*?)".*?\/?>/gi,
		'<img data-fancybox="gallery" data-sizes="auto" data-src="$1" alt="$2" class="lazyload">'
	)
	
	if(themeCfg.imageCDN.enable){
		data.content = data.content.replace(
			new RegExp(themeCfg.imageCDN.origin,"gm"),
			themeCfg.imageCDN.to
		);
	}
	
	return data;
});