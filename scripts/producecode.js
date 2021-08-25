//  functions for code generator
$(document).ready(function() {

    // global variables
    var $yobi = '';
    var $naikei = '';
    var $gaikei = '';
    var $atsumi = '';

    var $company = '';
    // var $type = '';

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
 
    /* 中分類
    $(".中分類").on('click', 'li a', function(){
        $type = $(this).data('id');
    }); */
     
    // 表面加工
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

        /* find code from array
        for (var i = 0, len = data.length; i < len; i++) {
            if((data[i].yobi == $yobi) 
             && (data[i].naikei == $naikei)
             && (data[i].gaikei == $gaikei)
             && (data[i].atsumi == $atsumi)
             && (data[i].company == $company)) 
            {
                result.push(data[i]);
            }
        }; */

        // filter (required field)
        result = data.filter(obj => obj.company == $company)

        // filter (optional field)
        if($yobi != ''){
            result = result.filter(obj => obj.yobi == $yobi)
        }
        if($naikei != ''){
            result = result.filter(obj => obj.naikei == $naikei)
        }
        if($gaikei != ''){
            result = result.filter(obj => obj.gaikei == $gaikei)
        }
        if($atsumi != ''){
            result = result.filter(obj => obj.atsumi == $atsumi)
        }

        if($company == ''){
            $('.result-table tbody').html('');
            $('.code-before').html('表面加工を選んでください。');
        }
        else if(result.length == 0){
            $('.result-table tbody').html('');
            $('.code-before').html('該当の部品がありません。');
        }
        else{
            $('.code-before').html('');
            $('.result-table tbody').html('');
            /*
            $.each(result, function(i, val) {
                val = "<p>"+val+"</p>"
                $('.code-before').append(val);
            }); */
            for (var i = 0, len = result.length; i < len; i++) {
                $(".result-table tbody").append("<tr><td style=\"width: 30%;\">" + result[i].code + "</td><td style=\"width: 30%;\">" + result[i].name + "</td><td style=\"width: 10%;\">" + result[i].yobi + "</td><td style=\"width: 10%;\">" + result[i].naikei + "</td><td style=\"width: 10%;\">" + result[i].gaikei + "</td><td style=\"width: 10%;\">" + result[i].atsumi + "</td></tr>")
            };
        }
        
     });
});