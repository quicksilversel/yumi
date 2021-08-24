//  functions for code generator
$(document).ready(function() {

    // global variables
    var $yobi = '';
    var $naikei = '';
    var $gaikei = '';
    var $atsumi = '';
    var $company = '';
    var $type = '';

    var data = [];
    var result = [];
     
    // fetch data from local json file
    fetch('codedata.json')
    .then(response => response.json())
    .then(json => {
         for(var i in json)
             data.push(json[i]);
    })
    .catch(error => console.log(error));
 
    // get 中分類
    $(".中分類").on('click', 'li a', function(){
        $type = $(this).data('id');
    });
     
    // get 表面加工
    $(".表面処理").on('click', 'li a', function(){
         $company = $(this).data('id');
    });
 
    // return code
    $("#get-code").unbind('click').click(function() {
        // get 3サイズ、呼び
        $yobi = $('#呼び').val();
        $naikei = $('#内径').val();
        $gaikei = $('#外径').val();
        $atsumi = $('#厚み').val();
        
        /*
        console.log($yobi);
        console.log($naikei);
        console.log($gaikei);
        console.log($atsumi);
        console.log($company); 
        */

        // find code from array
        for (var i = 0, len = data.length; i < len; i++) {
            if((data[i].yobi == $yobi) 
             && (data[i].naikei == $naikei)
             && (data[i].gaikei == $gaikei)
             && (data[i].atsumi == $atsumi)
             && (data[i].company == $company)) 
            {
                // console.log(data[i].code);
                result.push(data[i].code);
            }
        };
        if(result.length == 0){
            $('.code').html('該当の部品がありません。');
        }
        else{
            $('.code').html('');
            $.each(result, function(i, val) {
                val = "<p>"+val+"</p>"
                $('.code').append(val);
            });
        }
        
     });
});