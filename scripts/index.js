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

    //identify the toggle switch HTML element
    const toggleSwitch = document.querySelector('#theme-switch input[type="checkbox"]');

    /**************** Dark Mode ****************/

    // determines if the user has a set theme
    function detectColorScheme(){

        var theme="light"; //default to light

        //local storage is used to override OS theme settings
        if(localStorage.getItem("theme")){
            if(localStorage.getItem("theme") == "dark"){
                var theme = "dark";
            }
        } else if(!window.matchMedia) {
            // matchMedia method not supported
            return false;
        } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
            //OS theme setting detected as dark
            var theme = "dark";
        }

        //dark theme preferred, set document with a `data-theme` attribute
        if (theme=="dark") {
            $('nav').removeClass('navbar-light');
            $('nav').addClass('navbar-dark');
            document.documentElement.setAttribute("data-theme", "dark");
        }
    }
    detectColorScheme();

    //function that changes the theme, and sets a localStorage variable to track the theme between page loads
    function switchTheme(e) {
        if (e.target.checked) {
            localStorage.setItem('theme', 'dark');
            $('nav').removeClass('navbar-light');
            $('nav').addClass('navbar-dark');
            document.documentElement.setAttribute('data-theme', 'dark');
            toggleSwitch.checked = true;
        } else {
            localStorage.setItem('theme', 'light');
            $('nav').removeClass('navbar-dark');
            $('nav').addClass('navbar-light');
            document.documentElement.setAttribute('data-theme', 'light');
            toggleSwitch.checked = false;
        }    
    }

    //listener for changing themes
    toggleSwitch.addEventListener('change', switchTheme, false);

    //pre-check the dark-theme checkbox if dark-theme is set
    if (document.documentElement.getAttribute("data-theme") == "dark"){
        toggleSwitch.checked = true;
    }
});