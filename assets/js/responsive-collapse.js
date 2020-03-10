function responsiveCollapseSm(e) {
  if (e.matches) { // If media query matches
    $('.show-sm').collapse('show');
    $('.hide-sm').collapse('hide');
  } else {
    $('.show-sm').collapse('hide');
    $('.hide-sm').collapse('show');
  }
}
function responsiveCollapseMd(e) {
  if (e.matches) { // If media query matches
    $('.show-md').collapse('show');
    $('.hide-md').collapse('hide');
  } else {
    $('.show-md').collapse('hide');      
    $('.hide-md').collapse('show');
  }
}
function responsiveCollapseLg(e) {
  if (e.matches) { // If media query matches
    $('.show-lg').collapse('show');
    $('.hide-lg').collapse('hide');
  } else {
    $('.show-lg').collapse('hide');
    $('.hide-lg').collapse('show');
  }
}
function responsiveCollapseXl(e) {
  if (e.matches) { // If media query matches
    $('.show-xl').collapse('show');
    $('.hide-xl').collapse('hide');
  } else {
    $('.show-xl').collapse('hide');
    $('.hide-xl').collapse('show');
  }
}

var sm = window.matchMedia("(min-width: 576px)"),
    md = window.matchMedia("(min-width: 768px)"),
    lg = window.matchMedia("(min-width: 992px)"),
    xl = window.matchMedia("(min-width: 1200px)");

responsiveCollapseSm(sm) // Call listener function at run time
sm.addListener(responsiveCollapseSm) // Attach listener function on state changes

responsiveCollapseMd(md) // Call listener function at run time
md.addListener(responsiveCollapseMd) // Attach listener function on state changes

responsiveCollapseLg(lg) // Call listener function at run time
lg.addListener(responsiveCollapseLg) // Attach listener function on state changes

responsiveCollapseXl(xl) // Call listener function at run time
xl.addListener(responsiveCollapseXl) // Attach listener function on state changes