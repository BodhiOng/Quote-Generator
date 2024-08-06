document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementById("dynamicImage");

    // Function to set the image height based on the viewport and header/footer height
    function setImageHeight() {
        var screenHeight = window.innerHeight;
        var headerHeight = document.querySelector('.header').offsetHeight;
        var footerHeight = document.querySelector('.footer').offsetHeight;

        var imgHeight = screenHeight - headerHeight - footerHeight;
        img.style.height = imgHeight + "px";

        var screenWidth = window.innerWidth;
        var newImgSrc = "https://picsum.photos/" + screenWidth + "/" + imgHeight;
        
        // Preload the image before displaying it
        preloadImage(newImgSrc, function() {
            img.classList.remove('loaded');
            setTimeout(function() {
                img.src = newImgSrc;
                img.classList.add('loaded');
            }, 1000);
        });
    }

    // Preload image function
    function preloadImage(src, callback) {
        var preImg = new Image();
        preImg.onload = callback;
        preImg.src = src;
    }

    // Debounce function to limit the rate of function execution
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    var debouncedSetImageHeight = debounce(setImageHeight, 200);

    // Set initial image height and add event listener for window resize
    setImageHeight();
    window.addEventListener('resize', debouncedSetImageHeight);

    // Function to fetch and display a random quote
    function fetchAndDisplayQuote() {
        const categories = [
            "age", "alone", "amazing", "anger", "architecture", "art", "attitude", "beauty", "best",
            "birthday", "business", "car", "change", "communication", "computers", "cool", "courage",
            "dad", "dating", "death", "design", "dreams", "education", "environmental", "equality",
            "experience", "failure", "faith", "family", "famous", "fear", "fitness", "food",
            "forgiveness", "freedom", "friendship", "funny", "future", "god", "good", "government",
            "graduation", "great", "happiness", "health", "history", "home", "hope", "humor",
            "imagination", "inspirational", "intelligence", "jealousy", "knowledge", "leadership",
            "learning", "legal", "life", "love", "marriage", "medical", "men", "mom", "money",
            "morning", "movies", "success"
        ];

        // Function to pick a random category from the list
        function pickRandomCategory() {
            const randomIndex = Math.floor(Math.random() * categories.length);
            return categories[randomIndex];
        }

        const category = pickRandomCategory();

        // Fetch a quote from the API
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
            headers: { 'X-Api-Key': '4S1xFyCAA+WxkypINY9B9w==8eoKCeoAbuHKsAHz' },
            contentType: 'application/json',
            success: function(result) {
                if (result.length > 0) {
                    $('#quoteText').text(result[0].quote + ' - ' + result[0].author);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error('Error fetching quote:', textStatus, errorThrown);
            }
        });
    }

    // Fetch and display a quote on page load
    fetchAndDisplayQuote();

    // Event listener for the "Generate Quote" button
    $('#generateQuoteButton').click(function(event) {
        event.preventDefault();
        fetchAndDisplayQuote();
    });

    // Event listener for the "About the Developer" link
    $('#aboutDeveloperLink').click(function(event) {
        event.preventDefault();
        window.location.href = 'https://github.com/BodhiOng';
    });
});