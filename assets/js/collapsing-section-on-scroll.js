var collapsingMenu = document.getElementById("collapsing-menu-on-scroll");
if (collapsingMenu) {
    var lastScrollTop = 0; // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop){
            // downscroll code
            $('#collapsing-menu-on-scroll').collapse('hide');
        } else {
            // upscroll code
            $('#collapsing-menu-on-scroll').collapse('show');
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
}