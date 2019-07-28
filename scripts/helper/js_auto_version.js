'use strict';

function jsAutoVersionHelper(...args) {
    return args.reduce((result, path, i) => {
        if (i) result += '\n';

        if (Array.isArray(path)) {
            return result + Reflect.apply(jsHelper, this, path);
        }
        if (!path.includes('?') && !path.endsWith('.js')) path += '.js';
        let url_suffix = "?v=" + new Date().getTime();
        let url = this.url_for(path) + url_suffix;
        return `${result}<script src="${url}"></script>`;
    }, '');
}

hexo.extend.helper.register('js_auto_version', jsAutoVersionHelper);
