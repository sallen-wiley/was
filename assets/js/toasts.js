function isMobileInterceptNotDisplaying() {
    // get the intercept element
    var element = document.getElementById("mobile-intercept");
    // does the element exist?
    if (!!element) {
        // if it exists, is it displaying?
        if (getComputedStyle(element, null).display == "none") {
            return true
        }
    } else {
        return true;
    }
}
$(document).ready(function() {
    var usedToast;
    $(window).scroll(function() {        
        if ($(document).scrollTop() > 1500 && usedToast != 1 && isMobileInterceptNotDisplaying()) {
            $('#toast--related-article').toast('show');
            usedToast = 1;
        }
  });
});