$(document).ready(function(){
  let fitHeight = function(){
    let imgHeight = $(".aboutImg").outerHeight();
    // console.log(imgHeight);
    $(".aboutTxt").height(imgHeight);

    $(window).resize(function(){
      let imgHeight = $(".aboutImg").outerHeight();
    $(".aboutTxt").height(imgHeight);
    })
  }
  fitHeight();
});