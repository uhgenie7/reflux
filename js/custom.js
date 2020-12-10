  let showNav = function() {
    $(".mobileIcon").click(function(){
      $("header").addClass("open");
    });

    $(".mobileTimes").click(function(){
      $("header").removeClass("open");
    });
  }

  showNav();

});
let btn = document.querySelectorAll('.work__content');
function clickMenuHandler(){
  let activeMenu = document.querySelector(".active");
  activeMenu.classList.remove("active");
  this.classList.add("active");

}

for(let i = 0; i<btn.length; i++) {
  btn[i].addEventListener("click", clickMenuHandler);
}