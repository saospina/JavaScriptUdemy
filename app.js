// Video 42 cookies


function createCookie(name, value) {
    valor = escape(value);
    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() + 1);
    
    document.cookie = name +'='+ value + ';expires=' + hoy.toUTCString()+';';
}

function deleteCookie(name) {
    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() - 1);
    
    document.cookie = name +'='+ value + ';expires=' + hoy.toUTCString()+';';
}

createCookie('name','Antonio')

var cookies = document.cookie;
console.log(cookies);
