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