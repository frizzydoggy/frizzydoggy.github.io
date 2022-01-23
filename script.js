document.addEventListener("DOMContentLoaded", function(){
    start()
});
function start() {
    var ageElem = document.getElementById("age");
    ageElem.innerText = getAge("Dec 04 2007 18:00:00 GMT+0000");
    
    var viewport = document.querySelector("meta[name=viewport]");
    if (window.devicePixelRatio == 2) {
        var val = window.outerWidth/window.outerHeight;
        if (window.outerHeight < 1000) {
            val = window.outerWidth/window.outerHeight;
        } else {
            val = window.outerWidth/window.outerHeight/0.7
        };
        viewport.setAttribute('content', 'width=device-width, initial-scale='+val+', maximum-scale='+val+', user-scalable=no');
    };
    
    document.getElementsByClassName("downbtn")[0].onclick = function(){
        var box = document.getElementsByClassName("box")[0];
        box.scrollTo({top: box.scrollHeight, behavior:'smooth'}); 
    };
    
    document.querySelectorAll('[data-link]').forEach(el=>{
        el.onclick = function() {
            window.open(el.dataset.link);
        };
    });
}
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
