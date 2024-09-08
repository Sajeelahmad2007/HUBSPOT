$('#customSwitch1').click(function(){
    document.body.classList.toggle("higcontrast");
})
let searchbtn = $('#magnifying-glass');
let cancelsearchbtn = $('.cancelsearch');
// let search_nav = ;
searchbtn.click(function(){
    $('.searchnav').addClass("d-s");
    $('.navigatuion1').addClass("d-n");
})
cancelsearchbtn.click(function(){

    $('.searchnav').removeClass("d-s");
    $('.navigatuion1').removeClass("d-n");
})
