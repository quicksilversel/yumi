$(document).ready(function() {

    // dropdown change text
    $(".dropdown-menu").on('click', 'li a', function(){
        $(this).closest('.condition').find(".btn:first-child").text($(this).text());
        $(this).closest('.condition').find(".btn:first-child").val($(this).text());
    });

    // dropdown search function
    $("#myInput1").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".表面処理 li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput2").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".表面処理 li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("#myInput4").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".商品 li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    
    $("#myInput5").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".行き先 li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // add active class
    $('.stat').on('click', function() {
        $('.stat').removeClass('active');
        $(this).addClass('active');
    }); 

    // toggler
    $("#toggle").on('click', function() {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });    
    
});