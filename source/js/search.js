// 参考 https://chaooo.github.io/article/20161109.html
var searchData;
function loadData(arg) {
    if (!searchData) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/content.json', true);
        xhr.onload = function() {
            if (this.status >= 200 && this.status < 300) {
                var res = JSON.parse(this.response || this.responseText);
                searchData = res instanceof Array ? res : res.posts;
                searchkey(arg);
            } else {
                console.error(statusText);
            }
        };
        xhr.onerror = function() {
            console.error(statusText);
        };
        xhr.send();
    } else {
        searchkey(arg);
    }
}

function searchkey(keyword) {
    keyword.forEach(word => {
        searchData.forEach(function(post){
            let rend = {};
            let reg = new RegExp(word, 'g');
            let flag = false;
            if (post.title.search(reg) !== -1) {
                rend.title = post.title.replace(reg, `<span class="keyword">${word}</span>`);
                flag = true;
            }
            let textpos = post.text.search(reg);
            if (textpos !== -1) {
                rend.text = `…${post.text.substring(textpos, textpos+18)}…`;
                rend.text = rend.text.replace(reg, `<span class="keyword">${word}</span>`);
                flag = true;
            }
            if (flag) {
                rend.title = !rend.title ? post.title : rend.title;
                rend.text= !rend.text ? post.text : rend.text;
                rend.href = `/${post.path}`;
                render(rend);
            }
        });
    });
}

function render(data) {
    let ele = document.createElement('div');
    ele.className = 'search-result';
    ele.innerHTML = `<a href=${data.href}><h3>${data.title}</h3>
    <span class="content">${data.text}<br>　</span></a>`;
    document.getElementsByClassName('search-body')[0].appendChild(ele);
}

// 主程序
let key = decodeURI(location.search.split('?q=')[1]);
if (key !== undefined && key !== 'undefined') {
    document.getElementsByClassName('search-input')[0].value = key;
    loadData(format(key));
    document.getElementById('nexmoe-search-space').style.display = 'flex';
}

// 事件
function sclose() {
    document.getElementById('nexmoe-search-space').style.display = 'none';
}

function sinput() {
    document.getElementsByClassName('search-body')[0].innerHTML = '';
    loadData(format(document.getElementsByClassName('search-input')[0].value));
}

// 搜索词格式化
function format(word) {
    return word.replace(/[ ]/g, '').split(' ');
}
