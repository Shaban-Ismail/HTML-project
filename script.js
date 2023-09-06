$(document).ready(function(){
    $(window).scroll(function()
    {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});


//Text Animation

var typed = new Typed(".typing",{
    strings: ["an IT Student", "a Gamer", "a Footballer", "a Coffee Addict", "a Traveller"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});