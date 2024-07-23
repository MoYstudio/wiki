/*
window.onload=function(){
  var hash=window.location.hash;
  if(!hash){
    window.location.hash="home"
  }
}eee
*/
/*jump.js.v1
$(function () {
  common("div");

  window.addEventListener("hashchange", function () {
      common("div");
  });

  function common(dom) {
      $(window.location.hash)
          .slideDown()  
          .siblings(dom)
          .slideUp(); 
  }
});*/

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