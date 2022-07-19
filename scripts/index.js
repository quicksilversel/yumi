$(document).ready(function() {

    /**************** Dropdown start ****************/

    // change text of dropdown to selected item
    $(".dropdown-menu").on('click', 'li', function(){
        $(this).closest('.condition').find(".btn:first-child").text($(this).text());
        $(this).closest('.condition').find(".btn:first-child").val($(this).text());
    });

    // add active class to selected item
    $('.stat').on('click', function() {
        $('.stat').removeClass('active');
        $(this).addClass('active');
    }); 

    // search function
    $("#companySearch").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".表面処理 li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

/**************** Dark Mode Toggler ****************/

function switchMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
} 