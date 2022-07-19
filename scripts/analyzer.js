// Code analyzer functions

$(document).ready(function() {

    // press enter to click submit button
    $('html').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
        $('input#get-product').click();
        return false;  
        }
    });   

    /**************** Analzyer ****************/

    // global variables
    var $code, $name, $yobi, $naikei, $gaikei, $atsumi = '';

    // return product
    $("#get-product").on("click", function() {
        // get code
        $code = $('#コード').val();

        // find product from array
        result = '';
        for (var i = 0, len = data.length; i < len; i++) {
            if(data[i].code == $code) 
            {
                // console.log(data[i].code);
                result = 'temp'
                $name = data[i].name
                $yobi = data[i].yobi
                $naikei = data[i].naikei
                $gaikei = data[i].gaikei
                $atsumi = data[i].atsumi
            }
        };

        // if input is empty
        if($code == ''){
            $('.result-row').html('');
            $('.analyzer-before').html('コードを入力してください。');
        }
        // if no result found
        if(result == ''){
            $('.result-row').html('');
            $('.analyzer-before').html('該当の部品がありません。');
        }
        // success
        else{
            $(".analyzer-before").html('');
            $(".result-row").html("<td style=\"width: 40%;\">" + $name + "</td><td style=\"width: 15%;\">" + $yobi + "</td><td style=\"width: 15%;\">" + $naikei + "</td><td style=\"width: 15%;\">" + $gaikei + "</td><td style=\"width: 15%;\">" + $atsumi + "</td>")
        }
     });
});