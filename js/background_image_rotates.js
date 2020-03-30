var images = ["photos/000015430004.jpg", "photos/000015430016.jpg", "photos/000015440001.jpg",
"photos/000017440027.jpg","photos/000020770019.jpg","photos/000020770023-4.png","photos/000023400029.jpg"];

//makes the body change backgrounds every 20 seconds?
$(function () {
    var i = 0;
    $("#homepage_body").css("background-image", "url(../" + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        // $("#body").fadeOut(100, function () {
        $("#homepage_body").fadeOut(2000, function () {
            $(this).css("background-image", "url(../" + images[i] + ")");
            $(this).fadeIn(2000);
            // $(this).fadeIn(100);
        });
    }, 10000); //every 10 seconds
});
