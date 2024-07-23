/*
window.onload=function(){
  var hash=window.location.hash;
  if(!hash){
    window.location.hash="home"
  }
}eee
*/
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
});