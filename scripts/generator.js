// Code generator page functions

$(document).ready(function() {

    $("#alertMessage").hide();

    // press enter to click submit button
    $('html').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
         {
           $('input[name = result-code]').click();
           return false;  
         }
    });   

    // copy code

	$(".result-row").on("click", ".productCode", function(e){
		var copyText = $(this).text();
		navigator.clipboard.writeText(copyText).then(() => {
			// Alert the user that the action took place.
			$("#alertMessage").show();
            setTimeout(function(){$("#alertMessage").hide()}, 3000)
		});
	});

    /**************** Generator ****************/

    // global variables
    var $yobi, $naikei, $gaikei, $atsumi, $company = '';

    var result = [];
     
    // 表面加工
    $("li.表面処理").on('click', function(){
         $company = $(this).data('id');
    });
 
    // return code
    $("#get-code").unbind('click').click(function() {
        // get 3サイズ、呼び
        $yobi = $('#呼び').val();
        $naikei = $('#内径').val();
        $gaikei = $('#外径').val();
        $atsumi = $('#厚み').val();

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

        // if company is not selected
        if($company == ''){
            $('.result-table tbody').html('');
            $('.code-before').html('表面加工を選んでください。');
        }
        // if no result found
        else if(result.length == 0){
            $('.result-table tbody').html('');
            $('.code-before').html('該当の部品がありません。');
        }
        // success
        else{
            $('.code-before').html('');
            $('.result-table tbody').html('');
            for (var i = 0, len = result.length; i < len; i++) {
                $(".result-table tbody").append(`<tr><td class="productCode" style="width: 30%;">${result[i].code}</td><td style="width: 30%;">${result[i].name}</td><td style="width: 10%;">${result[i].yobi}</td><td style="width: 10%;">${result[i].naikei}</td><td style="width: 10%;">${result[i].gaikei}</td><td style="width: 10%;">${result[i].atsumi}</td></tr>`)
            };
        }
     });
});