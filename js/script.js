$(function(){
    var carouselList = $("#carousel ul");
    var change = setInterval(changeSlide, 3000);

    function changeSlide(){
        carouselList.animate({'marginLeft':-600}, 800, moveFirstSlide);
    };

    function moveFirstSlide(){
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem); 
        carouselList.css({marginLeft:0});           
    };
});

