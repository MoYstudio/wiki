
$(function () {
  common("div");

  window.addEventListener("hashchange", function () {
    common("div");
  });

  function common(dom) {
    var target = $(window.location.hash);
    while (target.length && !target.is(dom)) {
      target = target.parent();
    }
    if (target.length && target.is(dom)) {
      target.slideDown().siblings(dom).slideUp();
    }
  }
});