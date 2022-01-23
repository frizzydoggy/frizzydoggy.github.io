document.addEventListener("DOMContentLoaded", function(){
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    var ageElem = document.getElementById("age");
    ageElem.innerText = getAge("Dec 04 2007 18:00:00 GMT+0000");
});
document.getElementsByClassName("downbtn")[0].onclick = function(){
 var box = document.getElementsByClassName("box")[0];
 box.scrollTo({top: box.scrollHeight, behavior:'smooth'}); 
}
document.querySelectorAll('[data-link]').forEach(el=>{
el.onclick = function() {
window.open(el.dataset.link)
}});
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
