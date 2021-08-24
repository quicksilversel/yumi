$(document).ready(function() {

    /************************ code generator ************************/
    
     // fetch data from local json file
     var data = [];
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
         var $yobi = $('#呼び').val();
         var $naikei = $('#内径').val();
         var $gaikei = $('#外径').val();
         var $atsumi = $('#厚み').val();
         
         console.log($yobi);
         console.log($naikei);
         console.log($gaikei);
         console.log($atsumi);
         console.log($company); 
         
         // find code from array
         for (var i = 0, len = data.length; i < len; i++) {
             if((data[i].yobi == $yobi) 
             && (data[i].naikei == $naikei)
             && (data[i].type == $type)
             && (data[i].gaikei == $gaikei)
             && (data[i].atsumi == $atsumi)
             && (data[i].company == $company)) 
             {
                 displayCode = data[i].code
                 console.log(data[i].code);
                 break;
             }
         };
         $('.code').html(displayCode);

     });
});