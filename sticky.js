$(document).ready(function () {
    const header = document.getElementById("headerSticky");
    const start = document.getElementById("start");
    const sticky = header.offsetTop;

    window.addEventListener('scroll',function(){
        if (window.pageYOffset > sticky) {
            header.classList.add("is-fixed-top");
            start.classList.add("has-m-t");
          } else {
            header.classList.remove("is-fixed-top");
            start.classList.remove("has-m-t");
        }
    })
});
