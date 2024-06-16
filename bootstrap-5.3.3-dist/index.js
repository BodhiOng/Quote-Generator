document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("dynamicImage");
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    
    var screenHeight = window.innerHeight;
    var headerHeight = header.offsetHeight;
    var footerHeight = footer.offsetHeight;

    var imgHeight = screenHeight - headerHeight - footerHeight;
    
    img.style.height = imgHeight + "px";
    
    var screenWidth = window.innerWidth;
    img.src = "https://picsum.photos/" + screenWidth + "/" + imgHeight;
});