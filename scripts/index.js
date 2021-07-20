$(document).ready(function() {

  
  // variables 
  var $id = '';

  // dropdown change text
  $(".dropdown-menu").on('click', 'li a', function(){
    $(this).closest('.condition').find(".btn:first-child").text($(this).text());
    $(this).closest('.condition').find(".btn:first-child").val($(this).text());
  });

  // dropdown search for text

  $("#myInput1").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".部品 li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("#myInput2").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".表面処理 li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $("#myInput3").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".呼び方 li").filter(function() {
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

  /* code generator */

  // 部品　
  $(".部品").on('click', 'li a', function(){
    $id = $(this).data('id');
  });

  // return code
  $("input[name='code']").on("click", function(){
    var $year = new Date().getFullYear();

    // input values
    var $naikei = $('#内径').val();
    var $gaikei = $('#外径').val();
    var $atsumi = $('#厚み').val();

  var $code = $id + $year + $naikei + $gaikei + $atsumi;
  $('.result-code').html($code);

  });

  /* shipping fee calculator */

  // variables 

  var $weight = 0;
  var $distance = 0;
  var $quantity = 0;
  var $cost = 0
  var $totalWeight = 0;

  // 商品
  $(".商品").on('click', 'li a', function(){
    $weight = parseFloat($(this).data('id'));
  });

  //　行き先
  $(".行き先").on('click', 'li a', function(){
    $distance = parseInt($(this).data('id'));
  });

  // return shipping fee
  $("input[name='shipping']").on("click", function(){

    // input values
    $quantity = parseInt($('#数量').val());

    // calculate total weight
    $totalWeight = parseFloat($quantity * $weight);

    // calculate cost by finding distance first, then weight

    if($distance == 50) {
      switch (true){
        case ($totalWeight <= 20):
          $cost = 700;
          break;
        default:
          break;
      }
    }
    else if($distance == 600) {
      switch (true){
        case ($totalWeight <= 20):
          $cost = 700;
          break;
        default:
          break;
      }
    }
    

    $('.shipping-fee').html($cost);

  });



});