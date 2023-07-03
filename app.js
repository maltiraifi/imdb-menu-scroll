$(document).ready(function(){
    $(".disappear").slideUp(0);
    $(".disappear").css( "visibility", "visible");
})

var menuButton = $(".menu");

var crossButton = $(".cross");

menuButton.on("click", function(){
    console.log("true");
    $(".disappear").slideToggle();
})

crossButton.on("click", function(){
    console.log("ture");
    $(".disappear").slideToggle();
})

crossButton.on("click", function(){
    // setTimeout(crossButton.css("color", "#242425"), 1000);
    crossButton.fadeOut(500).fadeIn(100);
    crossButton.css("user-select", "all");

})

