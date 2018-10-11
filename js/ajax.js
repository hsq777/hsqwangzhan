function sendAjax(options) {
    var _default = {
        method:'GET',
        url:'',
        data:null,
        success:null
    }
    for(var i in options){
        _default[i] = options[i]
    }
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method,_default.url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            var data = JSON.parse(xhr.response);
            _default.success(data);
        }
    }
}
