function nowTime() { //获取当前时间
    let now = new Date();
    let _month = (10 > (now.getMonth() + 1)) ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
    let _day = (10 > now.getDate()) ? '0' + now.getDate() : now.getDate();
    let _hour = (10 > now.getHours()) ? '0' + now.getHours() : now.getHours();
    let _minute = (10 > now.getMinutes()) ? '0' + now.getMinutes() : now.getMinutes();
    let _second = (10 > now.getSeconds()) ? '0' + now.getSeconds() : now.getSeconds();
    return now.getFullYear() + '-' + _month + '-' + _day + ' ' + _hour + ':' + _minute + ':' + _second;
}

function copy(value) {
    // 动态创建 textarea 标签
    const textarea = document.createElement('textarea')
        // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
    textarea.readOnly = 'readonly'
    textarea.style.position = 'absolute'
    textarea.style.left = '-9999px'
        // 将要 copy 的值赋给 textarea 标签的 value 属性
    textarea.value = value
        // 将 textarea 插入到 body 中
    document.body.appendChild(textarea)
        // 选中值并复制
    textarea.select()
    textarea.setSelectionRange(0, textarea.value.length)
    document.execCommand('Copy')
    document.body.removeChild(textarea)
}


var newpost = document.createElement('button');
newpost.innerText = 'Post Head';
newpost.style.backgroundColor = '#ffffff';
var time = new Date();
time.toLocaleString();
newpost.onclick = () => {
    var msg = `---
title: ${nowTime()}
date: ${nowTime()}
tags: [无]
categories: 默认
top: false

---

<!--more-->`
    copy(msg);
};
document.getElementsByClassName('site-meta')[0].appendChild(newpost);