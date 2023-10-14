
function jsAutoVersionHelper(...args) {
    return args.reduce((result, path, i) => {
        if (i) result += '\n';

        if (Array.isArray(path)) {
            return result + Reflect.apply(jsAutoVersionHelper, this, path);
        }
        if (!path.includes('?') && !path.endsWith('.js')) path += '.js';
        const url_suffix = '?v=' + new Date().getTime();
        const url = this.url_for(path) + url_suffix;
        return `${result}<script async src="${url}"></script>`;
    }, '');
}

hexo.extend.helper.register('js_auto_version', jsAutoVersionHelper);
