
function cssAutoVersionHelper(...args) {
    return args.reduce((result, path, i) => {
        if (i) result += '\n';

        if (Array.isArray(path)) {
            return result + Reflect.apply(cssAutoVersionHelper, this, path);
        }
        if (!path.includes('?') && !path.endsWith('.css')) path += '.css';
        const url_suffix = '?v=' + new Date().getTime();
        const url = this.url_for(path) + url_suffix;
        return `${result}<link rel="stylesheet" href="${url}">`;
    }, '');
}

hexo.extend.helper.register('css_auto_version', cssAutoVersionHelper);
