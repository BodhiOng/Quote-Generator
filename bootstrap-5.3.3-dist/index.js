document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("dynamicImage");

    function setImageHeight() {
        var screenHeight = window.innerHeight;
        var headerHeight = document.querySelector('.header').offsetHeight;
        var footerHeight = document.querySelector('.footer').offsetHeight;

        var imgHeight = screenHeight - headerHeight - footerHeight;
        img.style.height = imgHeight + "px";

        var screenWidth = window.innerWidth;
        var newImgSrc = "https://picsum.photos/" + screenWidth + "/" + imgHeight;
        
        preloadImage(newImgSrc, function() {
            img.classList.remove('loaded');
            setTimeout(function() {
                img.src = newImgSrc;
                img.classList.add('loaded');
            }, 1000);
        });
    }

    function preloadImage(src, callback) {
        var preImg = new Image();
        preImg.onload = callback;
        preImg.src = src;
    }

    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    var debouncedSetImageHeight = debounce(setImageHeight, 200);

    setImageHeight();
    window.addEventListener('resize', debouncedSetImageHeight);
});

// $(document).ready(function() {
//     var category = 'happiness';
//     $.ajax({
//         method: 'GET',
//         url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
//         headers: { 'X-Api-Key': '4S1xFyCAA+WxkypINY9B9w==8eoKCeoAbuHKsAHz'},
//         contentType: 'application/json',
//         success: function(result) {
//             if(result.length > 0) {
//                 $('#quoteText').text(result[0].quote + ' - ' + result[0].author);
//             }
//         },
//         error: function ajaxError(jqXHR) {
//             console.error('Error: ', jqXHR.responseText);
//         }
//     });
// });