/**
*��ȡ����򴴽�����
*/
function $(s){
    if(/<([a-zA-Z0-9]+)>/.test(s)){
        return document.createElement(RegExp.$1);
    }
    return document.querySelectorAll(s);
}



/**
*ɾ�����ҿհ׸�
*/
function trim(s){
    return s.replace(/^\s+|\s+$/gm,'');
}



/**
*��ȡ����λ�ã���body�����Ͻ�Ϊԭ�㣩
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