//  functions for code analyzer
$(document).ready(function() {

    // global variables
    var $code = '';
    var $type, $code, $name, $yobi, $naikei, $gaikei, $atsumi, $company = '';

    var data = [];
    var result = '';
     
    // fetch data from local json file
    fetch('codedata.json')
    .then(response => response.json())
    .then(json => {
         for(var i in json)
             data.push(json[i]);
    })
    .catch(error => console.log(error));

    // return product
    $("#get-product").on("click", function() {
        // get code
        $code = $('#コード').val();
        // find product from array
        for (var i = 0, len = data.length; i < len; i++) {
            if(data[i].code == $code) 
            {
                // console.log(data[i].code);
                result = 'temp'
                $type = data[i].type
                $code = data[i].code
                $name = data[i].name
                $yobi = data[i].yobi
                $naikei = data[i].naikei
                $gaikei = data[i].gaikei
                $atsumi = data[i].gaikei
                $company = data[i].company
            }
        };
        if(result == ''){
            $('.no-product-result').html('該当の部品がありません。');
        }
        else{
            $(".analyzer-before").html("");
            $(".result-row").html("<td style=\"width: 10%;\">" + $type + "</td><td style=\"width: 15%;\">" + $code + "</td><td style=\"width: 15%;\">" + $name + "</td><td style=\"width: 10%;\">" + $yobi + "</td><td style=\"width: 10%;\">" + $naikei + "</td><td style=\"width: 10%;\">" + $gaikei + "</td><td style=\"width: 10%;\">" + $atsumi + "</td><td style=\"width: 20%;\">" + $company + "</td>")
        }
       
     });
});