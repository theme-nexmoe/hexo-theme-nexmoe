'use strict';

function imageAutoLazyloadHelper(content) {
    return content.replace(/<img.*?src="(.*?)" alt="(.*?)".*?\/?>/gi, '<img data-sizes="auto" data-src="$1" alt="$2" class="lazyload">');
}
hexo.extend.helper.register('image_auto_lazyload', imageAutoLazyloadHelper);
