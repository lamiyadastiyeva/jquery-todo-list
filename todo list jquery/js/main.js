$(function () {
    $(".input-box").change(function () {
        let inputBox = $(".input-box").val();
        $("ul").append("<li>" + inputBox + "<i class='fas fa-check'></i> <i class='fas fa-trash-alt'></i></li>");
        $(".input-box").val(" ");
    });
    $("ul").on("click",".fa-check", function(){
        $(this).parent("li").toggleClass("bg-color");
    });
    $("ul").on("click",".fa-trash-alt", function(){
        $(this).parent("li").animate({top: "30px"}, 100).fadeOut(200);
    });
});