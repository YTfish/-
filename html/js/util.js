/**
*获取对象或创建对象
*/
function $(s){
    if(/<([a-zA-Z0-9]+)>/.test(s)){
        return document.createElement(RegExp.$1);
    }
    return document.querySelectorAll(s);
}



/**
*删除左右空白格
*/
function trim(s){
    return s.replace(/^\s+|\s+$/gm,'');
}



/**
*获取对象位置（以body的左上角为原点）
*/
function getPosition(e) {
    var x = 0, y = 0;
    while(e != null) {
        x += e.offsetLeft;
        y += e.offsetTop;
        e = e.offsetParent;
    }
    return { x: x, y: y };
}