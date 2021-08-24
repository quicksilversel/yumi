/************************ shipping fee calculator ************************/

    // variables 

    var $weight = 0;
    var $distance = 0;
    var $quantity = 0;
    var $cost = 0;
    var $totalWeight = 0;
    var $additional = '';
    var $additional_cost = 0;
    var $totalCost = 0;
    var lastClass = -1;

    // get 商品
    $(".商品").on('click', 'li a', function(){
        $weight = parseFloat($(this).data('id'));
    });

    //　get 行き先
    $(".行き先").on('click', 'li a', function(){
        $distance = parseInt($(this).data('id'));
        $additional = $(this).data('add');
    });

    // return shipping fee 
    $("input[name='shipping']").on("click", function(){
    /* panda button start */

    // randomly change panda color
    const colorVariations = [
      'blue',
      'green',
      'pink',
      'brown',
      'dark_brown'
    ];

    var nextClass = Math.floor(Math.random() * 5);

    // ensures no repeat
    while (nextClass === lastClass) {
      var nextClass = Math.floor(Math.random() * 5);
    }

    $('.panda_icon_random').removeClass('blue green pink brown dark_brown')
    .addClass(colorVariations[nextClass]);

    lastClass = nextClass;
    /* panda button end */

    // input values
    $quantity = parseInt($('#数量').val());

    // calculate total weight
    $totalWeight = parseFloat($quantity * $weight).toFixed(4);

    /************** data for shipping fee cost **************/

    // calculate cost by distance and weight
    if($distance == 50) {
      switch (true) {
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 700;
          break;
        case($totalWeight < 40):
          $cost = 800;
          break;
        case($totalWeight < 60):
          $cost = 900;
          break;
        case($totalWeight < 80):
          $cost = 900;
          break;
          /**/
        case($totalWeight < 100):
          $cost = 1000;
          break;
        case($totalWeight < 120):
          $cost = 1200;
          break;
        case($totalWeight < 140):
          $cost = 1300;
          break;
        case($totalWeight < 160):
          $cost = 1400;
          break;
        case($totalWeight < 180):
          $cost = 1600;
          break;
          /**/
        case($totalWeight < 200):
          $cost = 1700;
          break;
        case($totalWeight < 250):
          $cost = 1700;
          break;
        case($totalWeight < 300):
          $cost = 2000;
          break;
        case($totalWeight < 350):
          $cost = 2300;
          break;
        case($totalWeight < 400):
          $cost = 2600;
          break;
          /**/
        case($totalWeight < 450):
          $cost = 2900;
          break;
        case($totalWeight < 500):
          $cost = 3200;
          break;
        case($totalWeight < 550):
          $cost = 3500;
          break;
        case($totalWeight < 600):
          $cost = 3800;
          break;
        case($totalWeight < 650):
          $cost = 4100;
          break;
          /**/
        case($totalWeight < 700):
          $cost = 4400;
          break;
        case($totalWeight < 750):
          $cost = 4700;
          break;
        case($totalWeight < 800):
          $cost = 5100;
          break;
        case($totalWeight < 850):
          $cost = 5400;
          break;
        case($totalWeight < 900):
          $cost = 5700;
          break;
          /**/
        case($totalWeight < 950):
          $cost = 6000;
          break;
        case($totalWeight < 1000):
          $cost = 6300;
          break;
        case($totalWeight < 1100):
          $cost = 6600;
          break;
        case($totalWeight < 1200):
          $cost = 7900;
          break;
        case($totalWeight < 1300):
          $cost = 8300;
          break;
          /**/
        case($totalWeight < 1400):
          $cost = 8800;
          break;
        case($totalWeight < 1500):
          $cost = 9200;
          break;
        case($totalWeight < 1600):
          $cost = 9600;
          break;
        case($totalWeight < 1700):
          $cost = 10100;
          break;
        case($totalWeight < 1800):
          $cost = 10500;
          break;
          /**/
        case($totalWeight < 1900):
          $cost = 11000;
          break;
        case($totalWeight < 2000):
          $cost = 11400;
          break;
        case(2000 <= $totalWeight):
          $cost = 11800;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 100){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 700;
          break;
        case($totalWeight < 40):
          $cost = 800;
          break;
        case($totalWeight < 60):
          $cost = 900;
          break;
        case(totalWeight < 80):
          $cost = 900;
          break;
          /**/
        case($totalWeight < 100):
          $cost = 1100;
          break;
        case($totalWeight < 120):
          $cost = 1200;
          break;
        case($totalWeight < 140):
          $cost = 1400;
          break;
        case($totalWeight < 160):
          $cost = 1500;
          break;
        case($totalWeight < 180):
          $cost = 1600;
          break;
          /**/
        case($totalWeight < 200):
          $cost = 1800;
          break;
        case($totalWeight < 250):
          $cost = 1900;
          break;
        case(totalWeight < 300):
          $cost = 2100;
          break;
        case($totalWeight < 350):
          $cost = 2500;
          break;
        case($totalWeight < 400):
          $cost = 2800;
          break;
          /**/
        case($totalWeight < 450):
          $cost = 3200;
          break;
        case($totalWeight < 500):
          $cost = 3500;
          break;
        case($totalWeight < 550):
          $cost = 3800;
          break;
        case($totalWeight < 600):
          $cost = 4200;
          break;
        case($totalWeight < 650):
          $cost = 4500;
          break;
          /**/
        case($totalWeight < 700):
          $cost = 4900;
          break;
        case($totalWeight < 750):
          $cost = 5200;
          break;
        case($totalWeight < 800):
          $cost = 5500;
          break;
        case($totalWeight < 850):
          $cost = 5900;
          break;
        case($totalWeight < 900):
          $cost = 6200;
          break;
          /**/
        case($totalWeight < 950):
          $cost = 6500;
          break;
        case($totalWeight < 1000):
          $cost = 6900;
          break;
        case($totalWeight < 1100):
          $cost = 7200;
          break;
        case($totalWeight < 1200):
          $cost = 8800;
          break;
        case($totalWeight < 1300):
          $cost = 9300;
          break;
          /**/
        case($totalWeight < 1400):
          $cost = 9900;
          break;
        case($totalWeight < 1500):
          $cost = 10400;
          break;
        case($totalWeight < 1600):
          $cost = 11000;
          break;
        case($totalWeight < 1700):
          $cost = 11500;
          break;
        case($totalWeight < 1800):
          $cost = 12100;
          break;
          /**/
        case($totalWeight < 1900):
          $cost = 12600;
          break;
        case($totalWeight < 2000):
          $cost = 13200;
          break;
        case($totalWeight):
          $cost = 13700;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 150){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 800;
          break;
        case($totalWeight < 40):
          $cost = 800;
          break;
        case($totalWeight < 60):
          $cost = 900;
          break;
        case($totalWeight < 80):
          $cost = 1000;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1200;
          break;
        case($totalWeight < 120):
          $cost = 1300;
          break;
        case($totalWeight < 140):
          $cost = 1500;
          break;
        case($totalWeight < 160):
          $cost = 1600;
          break;
        case($totalWeight < 180):
          $cost = 1800;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 1900;
          break;
        case($totalWeight < 250):
          $cost = 2000;
          break;
        case($totalWeight < 300):
          $cost = 2400;
          break;
        case($totalWeight < 350):
          $cost = 2800;
          break;
        case($totalWeight < 400):
          $cost = 3200;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 3500;
          break;
        case($totalWeight < 500):
          $cost = 3900;
          break;
        case($totalWeight < 550):
          $cost = 4300;
          break;
        case($totalWeight < 600):
          $cost = 4700;
          break;
        case($totalWeight < 650):
          $cost = 5100;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 5400;
          break;
        case($totalWeight < 750):
          $cost = 5900;
          break;
        case($totalWeight < 800):
          $cost = 6300;
          break;
        case($totalWeight < 850):
          $cost = 6600;
          break;
        case($totalWeight < 900):
          $cost = 7000;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 7400;
          break;
        case($totalWeight < 1000):
          $cost = 7800;
          break;
        case($totalWeight < 1100):
          $cost = 8200;
          break;
        case($totalWeight < 1200):
          $cost = 10000;
          break;
        case($totalWeight < 1300):
          $cost = 10700;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 11400;
          break;
        case($totalWeight < 1500):
          $cost = 12100;
          break;
        case($totalWeight < 1600):
          $cost = 12800;
          break;
        case($totalWeight < 1700):
          $cost = 13500;
          break;
        case($totalWeight < 1800):
          $cost = 14300;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 15000;
          break;
        case($totalWeight < 2000):
          $cost = 15700;
          break;
        case(2000 <= $totalWeight):
          $cost = 16400;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 200){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 800;
          break;
        case($totalWeight < 40):
          $cost = 800;
          break;
        case($totalWeight < 60):
          $cost = 1000;
          break;
        case($totalWeight < 80):
          $cost = 1000;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1200;
          break;
        case($totalWeight < 120):
          $cost = 1400;
          break;
        case($totalWeight < 140):
          $cost = 1600;
          break;
        case($totalWeight < 160):
          $cost = 1800;
          break;
        case($totalWeight < 180):
          $cost = 1900;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 2100;
          break;
        case($totalWeight < 250):
          $cost = 2200;
          break;
        case($totalWeight < 300):
          $cost = 2600;
          break;
        case($totalWeight < 350):
          $cost = 3000;
          break;
        case($totalWeight < 400):
          $cost = 3400;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 3900;
          break;
        case($totalWeight < 500):
          $cost = 4300;
          break;
        case($totalWeight < 550):
          $cost = 4700;
          break;
        case($totalWeight < 600):
          $cost = 5200;
          break;
        case($totalWeight < 650):
          $cost = 5600;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 6100;
          break;
        case($totalWeight < 750):
          $cost = 6500;
          break;
        case($totalWeight < 800):
          $cost = 6900;
          break;
        case($totalWeight < 850):
          $cost = 7300;
          break;
        case($totalWeight < 900):
          $cost = 7800;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 8200;
          break;
        case($totalWeight < 1000):
          $cost = 8600;
          break;
        case($totalWeight < 1100):
          $cost = 9100;
          break;
        case($totalWeight < 1200):
          $cost = 11200;
          break;
        case($totalWeight < 1300):
          $cost = 12000;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 12900;
          break;
        case($totalWeight < 1500):
          $cost = 13700;
          break;
        case($totalWeight < 1600):
          $cost = 14600;
          break;
        case($totalWeight < 1700):
          $cost = 15400;
          break;
        case($totalWeight < 1800):
          $cost = 16300;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 17100;
          break;
        case($totalWeight < 2000):
          $cost = 18000;
          break;
        case(2000 <= $totalWeight):
          $cost = 18800;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 250){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 800;
          break;
        case($totalWeight < 40):
          $cost = 900;
          break;
        case($totalWeight < 60):
          $cost = 1000;
          break;
        case($totalWeight < 80):
          $cost = 1100;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1300;
          break;
        case($totalWeight < 120):
          $cost = 1500;
          break;
        case($totalWeight < 140):
          $cost = 1700;
          break;
        case($totalWeight < 160):
          $cost = 1900;
          break;
        case($totalWeight < 180):
          $cost = 2100;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 2300;
          break;
        case($totalWeight < 250):
          $cost = 2400;
          break;
        case($totalWeight < 300):
          $cost = 2800;
          break;
        case($totalWeight < 350):
          $cost = 3300;
          break;
        case($totalWeight < 400):
          $cost = 3800;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 4200;
          break;
        case($totalWeight < 500):
          $cost = 4700;
          break;
        case($totalWeight < 550):
          $cost = 5200;
          break;
        case($totalWeight < 600):
          $cost = 5700;
          break;
        case($totalWeight < 650):
          $cost = 6200;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 6700;
          break;
        case($totalWeight < 750):
          $cost = 7100;
          break;
        case($totalWeight < 800):
          $cost = 7600;
          break;
        case($totalWeight < 850):
          $cost = 8100;
          break;
        case($totalWeight < 900):
          $cost = 8600;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 9000;
          break;
        case($totalWeight < 1000):
          $cost = 9500;
          break;
        case($totalWeight < 1100):
          $cost = 10000;
          break;
        case($totalWeight < 1200):
          $cost = 12400;
          break;
        case($totalWeight < 1300):
          $cost = 13400;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 14400;
          break;
        case($totalWeight < 1500):
          $cost = 15400;
          break;
        case($totalWeight < 1600):
          $cost = 16400;
          break;
        case($totalWeight < 1700):
          $cost = 17400;
          break;
        case($totalWeight < 1800):
          $cost = 18400;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 19400;
          break;
        case($totalWeight < 2000):
          $cost = 20400;
          break;
        case(2000 <= $totalWeight):
          $cost = 21400;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 300){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 800;
          break;
        case($totalWeight < 40):
          $cost = 900;
          break;
        case($totalWeight < 60):
          $cost = 1000;
          break;
        case($totalWeight < 80):
          $cost = 1100;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1400;
          break;
        case($totalWeight < 120):
          $cost = 1600;
          break;
        case($totalWeight < 140):
          $cost = 1800;
          break;
        case($totalWeight < 160):
          $cost = 2000;
          break;
        case($totalWeight < 180):
          $cost = 2200;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 2400;
          break;
        case($totalWeight < 250):
          $cost = 2500;
          break;
        case($totalWeight < 300):
          $cost = 3000;
          break;
        case($totalWeight < 350):
          $cost = 3500;
          break;
        case($totalWeight < 400):
          $cost = 4000;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 4600;
          break;
        case($totalWeight < 500):
          $cost = 5100;
          break;
        case($totalWeight < 550):
          $cost = 5600;
          break;
        case($totalWeight < 600):
          $cost = 6100;
          break;
        case($totalWeight < 650):
          $cost = 6600;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 7200;
          break;
        case($totalWeight < 750):
          $cost = 7700;
          break;
        case($totalWeight < 800):
          $cost = 8200;
          break;
        case($totalWeight < 850):
          $cost = 8700;
          break;
        case($totalWeight < 900):
          $cost = 9200;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 9800;
          break;
        case($totalWeight < 1000):
          $cost = 10300;
          break;
        case($totalWeight < 1100):
          $cost = 10800;
          break;
        case($totalWeight < 1200):
          $cost = 13400;
          break;
        case($totalWeight < 1300):
          $cost = 14500;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 15600;
          break;
        case($totalWeight < 1500):
          $cost = 16600;
          break;
        case($totalWeight < 1600):
          $cost = 17700;
          break;
        case($totalWeight < 1700):
          $cost = 18800;
          break;
        case($totalWeight < 1800):
          $cost = 19900;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 21000;
          break;
        case($totalWeight < 2000):
          $cost = 22100;
          break;
        case(2000 <= $totalWeight):
          $cost = 23200;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 350){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 800;
          break;
        case($totalWeight < 40):
          $cost = 900;
          break;
        case($totalWeight < 60):
          $cost = 1000;
          break;
        case($totalWeight < 80):
          $cost = 1200;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1400;
          break;
        case($totalWeight < 120):
          $cost = 1600;
          break;
        case($totalWeight < 140):
          $cost = 1900;
          break;
        case($totalWeight < 160):
          $cost = 2100;
          break;
        case($totalWeight < 180):
          $cost = 2300;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 2500;
          break;
        case($totalWeight < 250):
          $cost = 2600;
          break;
        case($totalWeight < 300):
          $cost = 3200;
          break;
        case($totalWeight < 350):
          $cost = 3700;
          break;
        case($totalWeight < 400):
          $cost = 4300;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 4800;
          break;
        case($totalWeight < 500):
          $cost = 5400;
          break;
        case($totalWeight < 550):
          $cost = 5900;
          break;
        case($totalWeight < 600):
          $cost = 6500;
          break;
        case($totalWeight < 650):
          $cost = 7100;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 7600;
          break;
        case($totalWeight < 750):
          $cost = 8200;
          break;
        case($totalWeight < 800):
          $cost = 8800;
          break;
        case($totalWeight < 850):
          $cost = 9300;
          break;
        case($totalWeight < 900):
          $cost = 9900;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 10500;
          break;
        case($totalWeight < 1000):
          $cost = 11000;
          break;
        case($totalWeight < 1100):
          $cost = 11600;
          break;
        case($totalWeight < 1200):
          $cost = 14400;
          break;
        case($totalWeight < 1300):
          $cost = 15500;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 16700;
          break;
        case($totalWeight < 1500):
          $cost = 17900;
          break;
        case($totalWeight < 1600):
          $cost = 19100;
          break;
        case($totalWeight < 1700):
          $cost = 20300;
          break;
        case($totalWeight < 1800):
          $cost = 21400;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 22600;
          break;
        case($totalWeight < 2000):
          $cost = 23800;
          break;
        case(2000 <= $totalWeight):
          $cost = 25000;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 400){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 800;
          break;
        case($totalWeight < 40):
          $cost = 900;
          break;
        case($totalWeight < 60):
          $cost = 1100;
          break;
        case($totalWeight < 80):
          $cost = 1200;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1500;
          break;
        case($totalWeight < 120):
          $cost = 1700;
          break;
        case($totalWeight < 140):
          $cost = 2000;
          break;
        case($totalWeight < 160):
          $cost = 2200;
          break;
        case($totalWeight < 180):
          $cost = 2400;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 2700;
          break;
        case($totalWeight < 250):
          $cost = 2800;
          break;
        case($totalWeight < 300):
          $cost = 3400;
          break;
        case($totalWeight < 350):
          $cost = 4000;
          break;
        case($totalWeight < 400):
          $cost = 4500;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 5200;
          break;
        case($totalWeight < 500):
          $cost = 5800;
          break;
        case($totalWeight < 550):
          $cost = 6400;
          break;
        case($totalWeight < 600):
          $cost = 7000;
          break;
        case($totalWeight < 650):
          $cost = 7600;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 8200;
          break;
        case($totalWeight < 750):
          $cost = 8700;
          break;
        case($totalWeight < 800):
          $cost = 9400;
          break;
        case($totalWeight < 850):
          $cost = 10000;
          break;
        case($totalWeight < 900):
          $cost = 10600;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 11200;
          break;
        case($totalWeight < 1000):
          $cost = 11800;
          break;
        case($totalWeight < 1100):
          $cost = 12400;
          break;
        case($totalWeight < 1200):
          $cost = 15300;
          break;
        case($totalWeight < 1300):
          $cost = 16600;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 17900;
          break;
        case($totalWeight < 1500):
          $cost = 19100;
          break;
        case($totalWeight < 1600):
          $cost = 20400;
          break;
        case($totalWeight < 1700):
          $cost = 21700;
          break;
        case($totalWeight < 1800):
          $cost = 23000;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 24200;
          break;
        case($totalWeight < 2000):
          $cost = 25500;
          break;
        case(2000 <= $totalWeight):
          $cost = 26800;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 450){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 800;
          break;
        case($totalWeight < 40):
          $cost = 900;
          break;
        case($totalWeight < 60):
          $cost = 1100;
          break;
        case($totalWeight < 80):
          $cost = 1300;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1500;
          break;
        case($totalWeight < 120):
          $cost = 1800;
          break;
        case($totalWeight < 140):
          $cost = 2000;
          break;
        case($totalWeight < 160):
          $cost = 2300;
          break;
        case($totalWeight < 180):
          $cost = 2600;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 2800;
          break;
        case($totalWeight < 250):
          $cost = 3000;
          break;
        case($totalWeight < 300):
          $cost = 3500;
          break;
        case($totalWeight < 350):
          $cost = 4200;
          break;
        case($totalWeight < 400):
          $cost = 4800;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 5500;
          break;
        case($totalWeight < 500):
          $cost = 6100;
          break;
        case($totalWeight < 550):
          $cost = 6700;
          break;
        case($totalWeight < 600):
          $cost = 7400;
          break;
        case($totalWeight < 650):
          $cost = 8000;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 8700;
          break;
        case($totalWeight < 750):
          $cost = 9300;
          break;
        case($totalWeight < 800):
          $cost = 9900;
          break;
        case($totalWeight < 850):
          $cost = 10600;
          break;
        case($totalWeight < 900):
          $cost = 11200;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 11900;
          break;
        case($totalWeight < 1000):
          $cost = 12500;
          break;
        case($totalWeight < 1100):
          $cost = 13200;
          break;
        case($totalWeight < 1200):
          $cost = 16300;
          break;
        case($totalWeight < 1300):
          $cost = 17700;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 19100;
          break;
        case($totalWeight < 1500):
          $cost = 20400;
          break;
        case($totalWeight < 1600):
          $cost = 21800;
          break;
        case($totalWeight < 1700):
          $cost = 23200;
          break;
        case($totalWeight < 1800):
          $cost = 24500;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 25900;
          break;
        case($totalWeight < 2000):
          $cost = 27300;
          break;
        case(2000 <= $totalWeight):
          $cost = 28600;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 500){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 800;
          break;
        case($totalWeight < 40):
          $cost = 900;
          break;
        case($totalWeight < 60):
          $cost = 1100;
          break;
        case($totalWeight < 80):
          $cost = 1300;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1600;
          break;
        case($totalWeight < 120):
          $cost = 1900;
          break;
        case($totalWeight < 140):
          $cost = 2100;
          break;
        case($totalWeight < 160):
          $cost = 2400;
          break;
        case($totalWeight < 180):
          $cost = 2700;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 3000;
          break;
        case($totalWeight < 250):
          $cost = 3100;
          break;
        case($totalWeight < 300):
          $cost = 3700;
          break;
        case($totalWeight < 350):
          $cost = 4400;
          break;
        case($totalWeight < 400):
          $cost = 5000;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 5800;
          break;
        case($totalWeight < 500):
          $cost = 6400;
          break;
        case($totalWeight < 550):
          $cost = 7100;
          break;
        case($totalWeight < 600):
          $cost = 7800;
          break;
        case($totalWeight < 650):
          $cost = 8500;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 9200;
          break;
        case($totalWeight < 750):
          $cost = 9800;
          break;
        case($totalWeight < 800):
          $cost = 10500;
          break;
        case($totalWeight < 850):
          $cost = 11200;
          break;
        case($totalWeight < 900):
          $cost = 11900;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 12600;
          break;
        case($totalWeight < 1000):
          $cost = 13330;
          break;
        case($totalWeight < 1100):
          $cost = 13900;
          break;
        case($totalWeight < 1200):
          $cost = 17300;
          break;
        case($totalWeight < 1300):
          $cost = 18800;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 20200;
          break;
        case($totalWeight < 1500):
          $cost = 21700;
          break;
        case($totalWeight < 1600):
          $cost = 23100;
          break;
        case($totalWeight < 1700):
          $cost = 24600;
          break;
        case($totalWeight < 1800):
          $cost = 26100;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 27500;
          break;
        case($totalWeight < 2000):
          $cost = 29000;
          break;
        case(2000 <= $totalWeight):
          $cost = 30400;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 550){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 900;
          break;
        case($totalWeight < 40):
          $cost = 900;
          break;
        case($totalWeight < 60):
          $cost = 1200;
          break;
        case($totalWeight < 80):
          $cost = 1300;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1700;
          break;
        case($totalWeight < 120):
          $cost = 1900;
          break;
        case($totalWeight < 140):
          $cost = 2200;
          break;
        case($totalWeight < 160):
          $cost = 2500;
          break;
        case($totalWeight < 180):
          $cost = 2800;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 3100;
          break;
        case($totalWeight < 250):
          $cost = 3300;
          break;
        case($totalWeight < 300):
          $cost = 3900;
          break;
        case($totalWeight < 350):
          $cost = 4600;
          break;
        case($totalWeight < 400):
          $cost = 5300;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 6100;
          break;
        case($totalWeight < 500):
          $cost = 6800;
          break;
        case($totalWeight < 550):
          $cost = 7500;
          break;
        case($totalWeight < 600):
          $cost = 8200;
          break;
        case($totalWeight < 650):
          $cost = 8900;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 9700;
          break;
        case($totalWeight < 750):
          $cost = 10400;
          break;
        case($totalWeight < 800):
          $cost = 11100;
          break;
        case($totalWeight < 850):
          $cost = 11800;
          break;
        case($totalWeight < 900):
          $cost = 12600;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 13300;
          break;
        case($totalWeight < 1000):
          $cost = 14000;
          break;
        case($totalWeight < 1100):
          $cost = 14700;
          break;
        case($totalWeight < 1200):
          $cost = 18300;
          break;
        case($totalWeight < 1300):
          $cost = 19900;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 21400;
          break;
        case($totalWeight < 1500):
          $cost = 23000;
          break;
        case($totalWeight < 1600):
          $cost = 24500;
          break;
        case($totalWeight < 1700):
          $cost = 26100;
          break;
        case($totalWeight < 1800):
          $cost = 27600;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 29200;
          break;
        case($totalWeight < 2000):
          $cost = 30700;
          break;
        case(2000 <= $totalWeight):
          $cost = 32300;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 600){
      switch (true){
        case ($totalWeight < 20):
          $cost = 700;
          break;
        case($totalWeight < 30):
          $cost = 900;
          break;
        case($totalWeight < 40):
          $cost = 1000;
          break;
        case($totalWeight < 60):
          $cost = 1200;
          break;
        case($totalWeight < 80):
          $cost = 1400;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 1700;
          break;
        case($totalWeight < 120):
          $cost = 2000;
          break;
        case($totalWeight < 140):
          $cost = 2300;
          break;
        case($totalWeight < 160):
          $cost = 2600;
          break;
        case($totalWeight < 180):
          $cost = 2900;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 3200;
          break;
        case($totalWeight < 250):
          $cost = 3400;
          break;
        case($totalWeight < 300):
          $cost = 4100;
          break;
        case($totalWeight < 350):
          $cost = 4800;
          break;
        case($totalWeight < 400):
          $cost = 5600;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 6400;
          break;
        case($totalWeight < 500):
          $cost = 7100;
          break;
        case($totalWeight < 550):
          $cost = 7900;
          break;
        case($totalWeight < 600):
          $cost = 8600;
          break;
        case($totalWeight < 650):
          $cost = 9400;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 10200;
          break;
        case($totalWeight < 750):
          $cost = 10900;
          break;
        case($totalWeight < 800):
          $cost = 11700;
          break;
        case($totalWeight < 850):
          $cost = 12500;
          break;
        case($totalWeight < 900):
          $cost = 13200;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 14000;
          break;
        case($totalWeight < 1000):
          $cost = 14700;
          break;
        case($totalWeight < 1100):
          $cost = 15500;
          break;
        case($totalWeight < 1200):
          $cost = 19300;
          break;
        case($totalWeight < 1300):
          $cost = 20900;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 22600;
          break;
        case($totalWeight < 1500):
          $cost = 24200;
          break;
        case($totalWeight < 1600):
          $cost = 25800;
          break;
        case($totalWeight < 1700):
          $cost = 27500;
          break;
        case($totalWeight < 1800):
          $cost = 29100;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 30800;
          break;
        case($totalWeight < 2000):
          $cost = 32400;
          break;
        case(2000 <= $totalWeight):
          $cost = 34100;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 650){
      switch (true){
        case ($totalWeight < 20):
          $cost = 800;
          break;
        case($totalWeight < 30):
          $cost = 1000;
          break;
        case($totalWeight < 40):
          $cost = 1100;
          break;
        case($totalWeight < 60):
          $cost = 1400;
          break;
        case($totalWeight < 80):
          $cost = 1600;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 2000;
          break;
        case($totalWeight < 120):
          $cost = 2400;
          break;
        case($totalWeight < 140):
          $cost = 2700;
          break;
        case($totalWeight < 160):
          $cost = 3100;
          break;
        case($totalWeight < 180):
          $cost = 3500;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 3800;
          break;
        case($totalWeight < 250):
          $cost = 4000;
          break;
        case($totalWeight < 300):
          $cost = 4800;
          break;
        case($totalWeight < 350):
          $cost = 5800;
          break;
        case($totalWeight < 400):
          $cost = 6700;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 7600;
          break;
        case($totalWeight < 500):
          $cost = 8500;
          break;
        case($totalWeight < 550):
          $cost = 9400;
          break;
        case($totalWeight < 600):
          $cost = 10300;
          break;
        case($totalWeight < 650):
          $cost = 11200;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 12100;
          break;
        case($totalWeight < 750):
          $cost = 13100;
          break;
        case($totalWeight < 800):
          $cost = 14000;
          break;
        case($totalWeight < 850):
          $cost = 14900;
          break;
        case($totalWeight < 900):
          $cost = 15800;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 16700;
          break;
        case($totalWeight < 1000):
          $cost = 17600;
          break;
        case($totalWeight < 1100):
          $cost = 18500;
          break;
        case($totalWeight < 1200):
          $cost = 20300;
          break;
        case($totalWeight < 1300):
          $cost = 22000;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 23700;
          break;
        case($totalWeight < 1500):
          $cost = 25500;
          break;
        case($totalWeight < 1600):
          $cost = 27200;
          break;
        case($totalWeight < 1700):
          $cost = 28900;
          break;
        case($totalWeight < 1800):
          $cost = 30700;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 32400;
          break;
        case($totalWeight < 2000):
          $cost = 34100;
          break;
        case(2000 <= $totalWeight):
          $cost = 35900;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 700){
      switch (true){
        case ($totalWeight < 20):
          $cost = 800;
          break;
        case($totalWeight < 30):
          $cost = 1000;
          break;
        case($totalWeight < 40):
          $cost = 1100;
          break;
        case($totalWeight < 60):
          $cost = 1400;
          break;
        case($totalWeight < 80):
          $cost = 1600;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 2100;
          break;
        case($totalWeight < 120):
          $cost = 2500;
          break;
        case($totalWeight < 140):
          $cost = 2800;
          break;
        case($totalWeight < 160):
          $cost = 3200;
          break;
        case($totalWeight < 180):
          $cost = 3600;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 4000;
          break;
        case($totalWeight < 250):
          $cost = 4200;
          break;
        case($totalWeight < 300):
          $cost = 5000;
          break;
        case($totalWeight < 350):
          $cost = 6000;
          break;
        case($totalWeight < 400):
          $cost = 7000;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 7900;
          break;
        case($totalWeight < 500):
          $cost = 8900;
          break;
        case($totalWeight < 550):
          $cost = 9800;
          break;
        case($totalWeight < 600):
          $cost = 10800;
          break;
        case($totalWeight < 650):
          $cost = 11800;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 12700;
          break;
        case($totalWeight < 750):
          $cost = 13700;
          break;
        case($totalWeight < 800):
          $cost = 14600;
          break;
        case($totalWeight < 850):
          $cost = 15600;
          break;
        case($totalWeight < 900):
          $cost = 16600;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 17500;
          break;
        case($totalWeight < 1000):
          $cost = 18500;
          break;
        case($totalWeight < 1100):
          $cost = 19400;
          break;
        case($totalWeight < 1200):
          $cost = 21300;
          break;
        case($totalWeight < 1300):
          $cost = 23100;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 24900;
          break;
        case($totalWeight < 1500):
          $cost = 26700;
          break;
        case($totalWeight < 1600):
          $cost = 28600;
          break;
        case($totalWeight < 1700):
          $cost = 30400;
          break;
        case($totalWeight < 1800):
          $cost = 32200;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 34000;
          break;
        case($totalWeight < 2000):
          $cost = 35900;
          break;
        case(2000 <= $totalWeight):
          $cost = 37700;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 750){
      switch (true){
        case ($totalWeight < 20):
          $cost = 800;
          break;
        case($totalWeight < 30):
          $cost = 1000;
          break;
        case($totalWeight < 40):
          $cost = 1200;
          break;
        case($totalWeight < 60):
          $cost = 1400;
          break;
        case($totalWeight < 80):
          $cost = 1700;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 2100;
          break;
        case($totalWeight < 120):
          $cost = 2500;
          break;
        case($totalWeight < 140):
          $cost = 2900;
          break;
        case($totalWeight < 160):
          $cost = 3300;
          break;
        case($totalWeight < 180):
          $cost = 3700;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 4100;
          break;
        case($totalWeight < 250):
          $cost = 4400;
          break;
        case($totalWeight < 300):
          $cost = 5300;
          break;
        case($totalWeight < 350):
          $cost = 6300;
          break;
        case($totalWeight < 400):
          $cost = 7300;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 8300;
          break;
        case($totalWeight < 500):
          $cost = 9300;
          break;
        case($totalWeight < 550):
          $cost = 10300;
          break;
        case($totalWeight < 600):
          $cost = 11300;
          break;
        case($totalWeight < 650):
          $cost = 12300;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 13300;
          break;
        case($totalWeight < 750):
          $cost = 14300;
          break;
        case($totalWeight < 800):
          $cost = 15300;
          break;
        case($totalWeight < 850):
          $cost = 16300;
          break;
        case($totalWeight < 900):
          $cost = 17300;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 18300;
          break;
        case($totalWeight < 1000):
          $cost = 19300;
          break;
        case($totalWeight < 1100):
          $cost = 20300;
          break;
        case($totalWeight < 1200):
          $cost = 22200;
          break;
        case($totalWeight < 1300):
          $cost = 24200;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 26100;
          break;
        case($totalWeight < 1500):
          $cost = 28000;
          break;
        case($totalWeight < 1600):
          $cost = 29900;
          break;
        case($totalWeight < 1700):
          $cost = 31800;
          break;
        case($totalWeight < 1800):
          $cost = 33700;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 35700;
          break;
        case($totalWeight < 2000):
          $cost = 37600;
          break;
        case(2000 <= $totalWeight):
          $cost = 39500;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 800){
      switch (true){
        case ($totalWeight < 20):
          $cost = 800;
          break;
        case($totalWeight < 30):
          $cost = 1000;
          break;
        case($totalWeight < 40):
          $cost = 1200;
          break;
        case($totalWeight < 60):
          $cost = 1500;
          break;
        case($totalWeight < 80):
          $cost = 1700;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 2200;
          break;
        case($totalWeight < 120):
          $cost = 2600;
          break;
        case($totalWeight < 140):
          $cost = 3000;
          break;
        case($totalWeight < 160):
          $cost = 3500;
          break;
        case($totalWeight < 180):
          $cost = 3900;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 4300;
          break;
        case($totalWeight < 250):
          $cost = 4500;
          break;
        case($totalWeight < 300):
          $cost = 5500;
          break;
        case($totalWeight < 350):
          $cost = 6500;
          break;
        case($totalWeight < 400):
          $cost = 7500;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 8600;
          break;
        case($totalWeight < 500):
          $cost = 9700;
          break;
        case($totalWeight < 550):
          $cost = 10700;
          break;
        case($totalWeight < 600):
          $cost = 11800;
          break;
        case($totalWeight < 650):
          $cost = 12800;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 13900;
          break;
        case($totalWeight < 750):
          $cost = 14900;
          break;
        case($totalWeight < 800):
          $cost = 16000;
          break;
        case($totalWeight < 850):
          $cost = 17000;
          break;
        case($totalWeight < 900):
          $cost = 18100;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 19100;
          break;
        case($totalWeight < 1000):
          $cost = 20200;
          break;
        case($totalWeight < 1100):
          $cost = 21200;
          break;
        case($totalWeight < 1200):
          $cost = 23200;
          break;
        case($totalWeight < 1300):
          $cost = 25200;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 27300;
          break;
        case($totalWeight < 1500):
          $cost = 29300;
          break;
        case($totalWeight < 1600):
          $cost = 31300;
          break;
        case($totalWeight < 1700):
          $cost = 33300;
          break;
        case($totalWeight < 1800):
          $cost = 35300;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 37300;
          break;
        case($totalWeight < 2000):
          $cost = 39300;
          break;
        case(2000 <= $totalWeight):
          $cost = 41300;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 850){
      switch (true){
        case ($totalWeight < 20):
          $cost = 800;
          break;
        case($totalWeight < 30):
          $cost = 1100;
          break;
        case($totalWeight < 40):
          $cost = 1200;
          break;
        case($totalWeight < 60):
          $cost = 1500;
          break;
        case($totalWeight < 80):
          $cost = 1800;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 2300;
          break;
        case($totalWeight < 120):
          $cost = 2700;
          break;
        case($totalWeight < 140):
          $cost = 3100;
          break;
        case($totalWeight < 160):
          $cost = 3600;
          break;
        case($totalWeight < 180):
          $cost = 4000;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 4500;
          break;
        case($totalWeight < 250):
          $cost = 4700;
          break;
        case($totalWeight < 300):
          $cost = 5700;
          break;
        case($totalWeight < 350):
          $cost = 6800;
          break;
        case($totalWeight < 400):
          $cost = 7800;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 9000;
          break;
        case($totalWeight < 500):
          $cost = 10100;
          break;
        case($totalWeight < 550):
          $cost = 11100;
          break;
        case($totalWeight < 600):
          $cost = 12200;
          break;
        case($totalWeight < 650):
          $cost = 13300;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 14400;
          break;
        case($totalWeight < 750):
          $cost = 15500;
          break;
        case($totalWeight < 800):
          $cost = 16600;
          break;
        case($totalWeight < 850):
          $cost = 17700;
          break;
        case($totalWeight < 900):
          $cost = 18800;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 19900;
          break;
        case($totalWeight < 1000):
          $cost = 21000;
          break;
        case($totalWeight < 1100):
          $cost = 22100;
          break;
        case($totalWeight < 1200):
          $cost = 24200;
          break;
        case($totalWeight < 1300):
          $cost = 26300;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 28400;
          break;
        case($totalWeight < 1500):
          $cost = 30500;
          break;
        case($totalWeight < 1600):
          $cost = 32600;
          break;
        case($totalWeight < 1700):
          $cost = 34700;
          break;
        case($totalWeight < 1800):
          $cost = 36800;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 38900;
          break;
        case($totalWeight < 2000):
          $cost = 41000;
          break;
        case(2000 <= $totalWeight):
          $cost = 43100;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 900){
      switch (true){
        case ($totalWeight < 20):
          $cost = 800;
          break;
        case($totalWeight < 30):
          $cost = 1100;
          break;
        case($totalWeight < 40):
          $cost = 1200;
          break;
        case($totalWeight < 60):
          $cost = 1500;
          break;
        case($totalWeight < 80):
          $cost = 1800;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 2300;
          break;
        case($totalWeight < 120):
          $cost = 2800;
          break;
        case($totalWeight < 140):
          $cost = 3200;
          break;
        case($totalWeight < 160):
          $cost = 3700;
          break;
        case($totalWeight < 180):
          $cost = 4200;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 4600;
          break;
        case($totalWeight < 250):
          $cost = 4900;
          break;
        case($totalWeight < 300):
          $cost = 5900;
          break;
        case($totalWeight < 350):
          $cost = 7000;
          break;
        case($totalWeight < 400):
          $cost = 8100;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 9300;
          break;
        case($totalWeight < 500):
          $cost = 10400;
          break;
        case($totalWeight < 550):
          $cost = 11600;
          break;
        case($totalWeight < 600):
          $cost = 12700;
          break;
        case($totalWeight < 650):
          $cost = 13900;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 15000;
          break;
        case($totalWeight < 750):
          $cost = 16200;
          break;
        case($totalWeight < 800):
          $cost = 17300;
          break;
        case($totalWeight < 850):
          $cost = 18400;
          break;
        case($totalWeight < 900):
          $cost = 19600;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 20700;
          break;
        case($totalWeight < 1000):
          $cost = 21900;
          break;
        case($totalWeight < 1100):
          $cost = 23000;
          break;
        case($totalWeight < 1200):
          $cost = 25200;
          break;
        case($totalWeight < 1300):
          $cost = 27400;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 29600;
          break;
        case($totalWeight < 1500):
          $cost = 31800;
          break;
        case($totalWeight < 1600):
          $cost = 34000;
          break;
        case($totalWeight < 1700):
          $cost = 36200;
          break;
        case($totalWeight < 1800):
          $cost = 38400;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 40600;
          break;
        case($totalWeight < 2000):
          $cost = 42800;
          break;
        case(2000 <= $totalWeight):
          $cost = 45000;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 950){
      switch (true){
        case ($totalWeight < 20):
          $cost = 800;
          break;
        case($totalWeight < 30):
          $cost = 1100;
          break;
        case($totalWeight < 40):
          $cost = 1200;
          break;
        case($totalWeight < 60):
          $cost = 1600;
          break;
        case($totalWeight < 80):
          $cost = 1900;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 2400;
          break;
        case($totalWeight < 120):
          $cost = 2900;
          break;
        case($totalWeight < 140):
          $cost = 3300;
          break;
        case($totalWeight < 160):
          $cost = 3800;
          break;
        case($totalWeight < 180):
          $cost = 4300;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 4800;
          break;
        case($totalWeight < 250):
          $cost = 5000;
          break;
        case($totalWeight < 300):
          $cost = 6100;
          break;
        case($totalWeight < 350):
          $cost = 7300;
          break;
        case($totalWeight < 400):
          $cost = 8400;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 9600;
          break;
        case($totalWeight < 500):
          $cost = 10800;
          break;
        case($totalWeight < 550):
          $cost = 12000;
          break;
        case($totalWeight < 600):
          $cost = 13200;
          break;
        case($totalWeight < 650):
          $cost = 14400;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 15600;
          break;
        case($totalWeight < 750):
          $cost = 16800;
          break;
        case($totalWeight < 800):
          $cost = 18000;
          break;
        case($totalWeight < 850):
          $cost = 19100;
          break;
        case($totalWeight < 900):
          $cost = 20300;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 21500;
          break;
        case($totalWeight < 1000):
          $cost = 22700;
          break;
        case($totalWeight < 1100):
          $cost = 23900;
          break;
        case($totalWeight < 1200):
          $cost = 26200;
          break;
        case($totalWeight < 1300):
          $cost = 28500;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 30800;
          break;
        case($totalWeight < 1500):
          $cost = 33100;
          break;
        case($totalWeight < 1600):
          $cost = 35300;
          break;
        case($totalWeight < 1700):
          $cost = 37600;
          break;
        case($totalWeight < 1800):
          $cost = 39900;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 42200;
          break;
        case($totalWeight < 2000):
          $cost = 44500;
          break;
        case(2000 <= $totalWeight):
          $cost = 46800;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1000){
      switch (true){
        case ($totalWeight < 20):
          $cost = 800;
          break;
        case($totalWeight < 30):
          $cost = 1100;
          break;
        case($totalWeight < 40):
          $cost = 1300;
          break;
        case($totalWeight < 60):
          $cost = 1600;
          break;
        case($totalWeight < 80):
          $cost = 1900;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 2500;
          break;
        case($totalWeight < 120):
          $cost = 3000;
          break;
        case($totalWeight < 140):
          $cost = 3400;
          break;
        case($totalWeight < 160):
          $cost = 3900;
          break;
        case($totalWeight < 180):
          $cost = 4400;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 4900;
          break;
        case($totalWeight < 250):
          $cost = 5200;
          break;
        case($totalWeight < 300):
          $cost = 6300;
          break;
        case($totalWeight < 350):
          $cost = 7500;
          break;
        case($totalWeight < 400):
          $cost = 8700;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 10000;
          break;
        case($totalWeight < 500):
          $cost = 11200;
          break;
        case($totalWeight < 550):
          $cost = 12500;
          break;
        case($totalWeight < 600):
          $cost = 13700;
          break;
        case($totalWeight < 650):
          $cost = 14900;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 16200;
          break;
        case($totalWeight < 750):
          $cost = 17400;
          break;
        case($totalWeight < 800):
          $cost = 18600;
          break;
        case($totalWeight < 850):
          $cost = 19900;
          break;
        case($totalWeight < 900):
          $cost = 21100;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 22300;
          break;
        case($totalWeight < 1000):
          $cost = 23600;
          break;
        case($totalWeight < 1100):
          $cost = 24800;
          break;
        case($totalWeight < 1200):
          $cost = 27200;
          break;
        case($totalWeight < 1300):
          $cost = 29500;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 31900;
          break;
        case($totalWeight < 1500):
          $cost = 34300;
          break;
        case($totalWeight < 1600):
          $cost = 36700;
          break;
        case($totalWeight < 1700):
          $cost = 39100;
          break;
        case($totalWeight < 1800):
          $cost = 41400;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 43800;
          break;
        case($totalWeight < 2000):
          $cost = 46200;
          break;
        case(2000 <= $totalWeight):
          $cost = 48600;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1100){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1000;
          break;
        case($totalWeight < 30):
          $cost = 1400;
          break;
        case($totalWeight < 40):
          $cost = 1600;
          break;
        case($totalWeight < 60):
          $cost = 2000;
          break;
        case($totalWeight < 80):
          $cost = 2400;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 3100;
          break;
        case($totalWeight < 120):
          $cost = 3800;
          break;
        case($totalWeight < 140):
          $cost = 4400;
          break;
        case($totalWeight < 160):
          $cost = 5100;
          break;
        case($totalWeight < 180):
          $cost = 5700;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 6400;
          break;
        case($totalWeight < 250):
          $cost = 6700;
          break;
        case($totalWeight < 300):
          $cost = 8100;
          break;
        case($totalWeight < 350):
          $cost = 9700;
          break;
        case($totalWeight < 400):
          $cost = 11300;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 13000;
          break;
        case($totalWeight < 500):
          $cost = 14600;
          break;
        case($totalWeight < 550):
          $cost = 16200;
          break;
        case($totalWeight < 600):
          $cost = 17800;
          break;
        case($totalWeight < 650):
          $cost = 19400;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 21000;
          break;
        case($totalWeight < 750):
          $cost = 22600;
          break;
        case($totalWeight < 800):
          $cost = 24300;
          break;
        case($totalWeight < 850):
          $cost = 25900;
          break;
        case($totalWeight < 900):
          $cost = 27500;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 29100;
          break;
        case($totalWeight < 1000):
          $cost = 30700;
          break;
        case($totalWeight < 1100):
          $cost = 32300;
          break;
        case($totalWeight < 1200):
          $cost = 35400;
          break;
        case($totalWeight < 1300):
          $cost = 38500;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 41700;
          break;
        case($totalWeight < 1500):
          $cost = 44800;
          break;
        case($totalWeight < 1600):
          $cost = 47900;
          break;
        case($totalWeight < 1700):
          $cost = 51000;
          break;
        case($totalWeight < 1800):
          $cost = 54100;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 57200;
          break;
        case($totalWeight < 2000):
          $cost = 60400;
          break;
        case(2000 <= $totalWeight):
          $cost = 63500;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1200){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1000;
          break;
        case($totalWeight < 30):
          $cost = 1400;
          break;
        case($totalWeight < 40):
          $cost = 1600;
          break;
        case($totalWeight < 60):
          $cost = 2100;
          break;
        case($totalWeight < 80):
          $cost = 2500;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 3300;
          break;
        case($totalWeight < 120):
          $cost = 4000;
          break;
        case($totalWeight < 140):
          $cost = 4600;
          break;
        case($totalWeight < 160):
          $cost = 5400;
          break;
        case($totalWeight < 180):
          $cost = 6000;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 6700;
          break;
        case($totalWeight < 250):
          $cost = 7100;
          break;
        case($totalWeight < 300):
          $cost = 8600;
          break;
        case($totalWeight < 350):
          $cost = 10400;
          break;
        case($totalWeight < 400):
          $cost = 12100;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 13800;
          break;
        case($totalWeight < 500):
          $cost = 15500;
          break;
        case($totalWeight < 550):
          $cost = 17300;
          break;
        case($totalWeight < 600):
          $cost = 19000;
          break;
        case($totalWeight < 650):
          $cost = 20700;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 22400;
          break;
        case($totalWeight < 750):
          $cost = 24200;
          break;
        case($totalWeight < 800):
          $cost = 25900;
          break;
        case($totalWeight < 850):
          $cost = 27600;
          break;
        case($totalWeight < 900):
          $cost = 29300;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 31100;
          break;
        case($totalWeight < 1000):
          $cost = 32800;
          break;
        case($totalWeight < 1100):
          $cost = 34500;
          break;
        case($totalWeight < 1200):
          $cost = 37800;
          break;
        case($totalWeight < 1300):
          $cost = 41200;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 44500;
          break;
        case($totalWeight < 1500):
          $cost = 47800;
          break;
        case($totalWeight < 1600):
          $cost = 51200;
          break;
        case($totalWeight < 1700):
          $cost = 54500;
          break;
        case($totalWeight < 1800):
          $cost = 57900;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 61200;
          break;
        case($totalWeight < 2000):
          $cost = 64500;
          break;
        case(2000 <= $totalWeight):
          $cost = 67900;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1300){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1100;
          break;
        case($totalWeight < 30):
          $cost = 1400;
          break;
        case($totalWeight < 40):
          $cost = 1700;
          break;
        case($totalWeight < 60):
          $cost = 2200;
          break;
        case($totalWeight < 80):
          $cost = 2600;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 3400;
          break;
        case($totalWeight < 120):
          $cost = 4200;
          break;
        case($totalWeight < 140):
          $cost = 4900;
          break;
        case($totalWeight < 160):
          $cost = 5600;
          break;
        case($totalWeight < 180):
          $cost = 6400;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 7100;
          break;
        case($totalWeight < 250):
          $cost = 7500;
          break;
        case($totalWeight < 300):
          $cost = 9100;
          break;
        case($totalWeight < 350):
          $cost = 11000;
          break;
        case($totalWeight < 400):
          $cost = 12800;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 14600;
          break;
        case($totalWeight < 500):
          $cost = 16500;
          break;
        case($totalWeight < 550):
          $cost = 18300;
          break;
        case($totalWeight < 600):
          $cost = 20200;
          break;
        case($totalWeight < 650):
          $cost = 22000;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 23800;
          break;
        case($totalWeight < 750):
          $cost = 25700;
          break;
        case($totalWeight < 800):
          $cost = 27500;
          break;
        case($totalWeight < 850):
          $cost = 29300;
          break;
        case($totalWeight < 900):
          $cost = 31200;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 33000;
          break;
        case($totalWeight < 1000):
          $cost = 34800;
          break;
        case($totalWeight < 1100):
          $cost = 36700;
          break;
        case($totalWeight < 1200):
          $cost = 40200;
          break;
        case($totalWeight < 1300):
          $cost = 43800;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 47400;
          break;
        case($totalWeight < 1500):
          $cost = 50900;
          break;
        case($totalWeight < 1600):
          $cost = 54500;
          break;
        case($totalWeight < 1700):
          $cost = 58000;
          break;
        case($totalWeight < 1800):
          $cost = 61600;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 65200;
          break;
        case($totalWeight < 2000):
          $cost = 68700;
          break;
        case(2000 <= $totalWeight):
          $cost = 72300;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1400){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1100;
          break;
        case($totalWeight < 30):
          $cost = 1500;
          break;
        case($totalWeight < 40):
          $cost = 1700;
          break;
        case($totalWeight < 60):
          $cost = 2200;
          break;
        case($totalWeight < 80):
          $cost = 2700;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 3600;
          break;
        case($totalWeight < 120):
          $cost = 4400;
          break;
        case($totalWeight < 140):
          $cost = 5100;
          break;
        case($totalWeight < 160):
          $cost = 5900;
          break;
        case($totalWeight < 180):
          $cost = 6700;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 7500;
          break;
        case($totalWeight < 250):
          $cost = 7900;
          break;
        case($totalWeight < 300):
          $cost = 9600;
          break;
        case($totalWeight < 350):
          $cost = 11600;
          break;
        case($totalWeight < 400):
          $cost = 13500;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 15500;
          break;
        case($totalWeight < 500):
          $cost = 17400;
          break;
        case($totalWeight < 550):
          $cost = 19400;
          break;
        case($totalWeight < 600):
          $cost = 21300;
          break;
        case($totalWeight < 650):
          $cost = 23300;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 25200;
          break;
        case($totalWeight < 750):
          $cost = 27200;
          break;
        case($totalWeight < 800):
          $cost = 29100;
          break;
        case($totalWeight < 850):
          $cost = 31100;
          break;
        case($totalWeight < 900):
          $cost = 33000;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 35000;
          break;
        case($totalWeight < 1000):
          $cost = 36900;
          break;
        case($totalWeight < 1100):
          $cost = 38800;
          break;
        case($totalWeight < 1200):
          $cost = 42600;
          break;
        case($totalWeight < 1300):
          $cost = 46400;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 50200;
          break;
        case($totalWeight < 1500):
          $cost = 54000;
          break;
        case($totalWeight < 1600):
          $cost = 57800;
          break;
        case($totalWeight < 1700):
          $cost = 61600;
          break;
        case($totalWeight < 1800):
          $cost = 65300;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 69100;
          break;
        case($totalWeight < 2000):
          $cost = 72900;
          break;
        case(2000 <= $totalWeight):
          $cost = 76700;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1500){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1100;
          break;
        case($totalWeight < 30):
          $cost = 1500;
          break;
        case($totalWeight < 40):
          $cost = 1800;
          break;
        case($totalWeight < 60):
          $cost = 2300;
          break;
        case($totalWeight < 80):
          $cost = 2800;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 3800;
          break;
        case($totalWeight < 120):
          $cost = 4600;
          break;
        case($totalWeight < 140):
          $cost = 5400;
          break;
        case($totalWeight < 160):
          $cost = 6200;
          break;
        case($totalWeight < 180):
          $cost = 7100;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 7900;
          break;
        case($totalWeight < 250):
          $cost = 8300;
          break;
        case($totalWeight < 300):
          $cost = 10100;
          break;
        case($totalWeight < 350):
          $cost = 12200;
          break;
        case($totalWeight < 400):
          $cost = 14200;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 16300;
          break;
        case($totalWeight < 500):
          $cost = 18400;
          break;
        case($totalWeight < 550):
          $cost = 20400;
          break;
        case($totalWeight < 600):
          $cost = 22500;
          break;
        case($totalWeight < 650):
          $cost = 24500;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 26600;
          break;
        case($totalWeight < 750):
          $cost = 28700;
          break;
        case($totalWeight < 800):
          $cost = 30700;
          break;
        case($totalWeight < 850):
          $cost = 32800;
          break;
        case($totalWeight < 900):
          $cost = 34900;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 36900;
          break;
        case($totalWeight < 1000):
          $cost = 39000;
          break;
        case($totalWeight < 1100):
          $cost = 41000;
          break;
        case($totalWeight < 1200):
          $cost = 45000;
          break;
        case($totalWeight < 1300):
          $cost = 49000;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 53000;
          break;
        case($totalWeight < 1500):
          $cost = 57100;
          break;
        case($totalWeight < 1600):
          $cost = 61100;
          break;
        case($totalWeight < 1700):
          $cost = 65100;
          break;
        case($totalWeight < 1800):
          $cost = 69100;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 73100;
          break;
        case($totalWeight < 2000):
          $cost = 77100;
          break;
        case(2000 <= $totalWeight):
          $cost = 81100;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1600){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1100;
          break;
        case($totalWeight < 30):
          $cost = 1500;
          break;
        case($totalWeight < 40):
          $cost = 1800;
          break;
        case($totalWeight < 60):
          $cost = 2400;
          break;
        case($totalWeight < 80):
          $cost = 2900;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 3900;
          break;
        case($totalWeight < 120):
          $cost = 4800;
          break;
        case($totalWeight < 140):
          $cost = 5600;
          break;
        case($totalWeight < 160):
          $cost = 6500;
          break;
        case($totalWeight < 180):
          $cost = 7400;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 8300;
          break;
        case($totalWeight < 250):
          $cost = 8700;
          break;
        case($totalWeight < 300):
          $cost = 10700;
          break;
        case($totalWeight < 350):
          $cost = 12800;
          break;
        case($totalWeight < 400):
          $cost = 15000;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 17100;
          break;
        case($totalWeight < 500):
          $cost = 19300;
          break;
        case($totalWeight < 550):
          $cost = 21500;
          break;
        case($totalWeight < 600):
          $cost = 23700;
          break;
        case($totalWeight < 650):
          $cost = 25800;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 28000;
          break;
        case($totalWeight < 750):
          $cost = 30200;
          break;
        case($totalWeight < 800):
          $cost = 32300;
          break;
        case($totalWeight < 850):
          $cost = 34500;
          break;
        case($totalWeight < 900):
          $cost = 36700;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 38900;
          break;
        case($totalWeight < 1000):
          $cost = 41000;
          break;
        case($totalWeight < 1100):
          $cost = 43200;
          break;
        case($totalWeight < 1200):
          $cost = 47400;
          break;
        case($totalWeight < 1300):
          $cost = 51700;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 55900;
          break;
        case($totalWeight < 1500):
          $cost = 60100;
          break;
        case($totalWeight < 1600):
          $cost = 64400;
          break;
        case($totalWeight < 1700):
          $cost = 68600;
          break;
        case($totalWeight < 1800):
          $cost = 72800;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 77100;
          break;
        case($totalWeight < 2000):
          $cost = 81300;
          break;
        case(2000 <= $totalWeight):
          $cost = 85500;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1700){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1100;
          break;
        case($totalWeight < 30):
          $cost = 1600;
          break;
        case($totalWeight < 40):
          $cost = 1800;
          break;
        case($totalWeight < 60):
          $cost = 2500;
          break;
        case($totalWeight < 80):
          $cost = 3000;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 4100;
          break;
        case($totalWeight < 120):
          $cost = 5000;
          break;
        case($totalWeight < 140):
          $cost = 5800;
          break;
        case($totalWeight < 160):
          $cost = 6800;
          break;
        case($totalWeight < 180):
          $cost = 7700;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 8600;
          break;
        case($totalWeight < 250):
          $cost = 9100;
          break;
        case($totalWeight < 300):
          $cost = 11200;
          break;
        case($totalWeight < 350):
          $cost = 13400;
          break;
        case($totalWeight < 400):
          $cost = 15700;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 18000;
          break;
        case($totalWeight < 500):
          $cost = 20300;
          break;
        case($totalWeight < 550):
          $cost = 22500;
          break;
        case($totalWeight < 600):
          $cost = 24800;
          break;
        case($totalWeight < 650):
          $cost = 27100;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 29400;
          break;
        case($totalWeight < 750):
          $cost = 31700;
          break;
        case($totalWeight < 800):
          $cost = 34000;
          break;
        case($totalWeight < 850):
          $cost = 36300;
          break;
        case($totalWeight < 900):
          $cost = 38500;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 40800;
          break;
        case($totalWeight < 1000):
          $cost = 43100;
          break;
        case($totalWeight < 1100):
          $cost = 45400;
          break;
        case($totalWeight < 1200):
          $cost = 49800;
          break;
        case($totalWeight < 1300):
          $cost = 54300;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 58700;
          break;
        case($totalWeight < 1500):
          $cost = 63200;
          break;
        case($totalWeight < 1600):
          $cost = 67600;
          break;
        case($totalWeight < 1700):
          $cost = 72100;
          break;
        case($totalWeight < 1800):
          $cost = 76600;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 81000;
          break;
        case($totalWeight < 2000):
          $cost = 85500;
          break;
        case(2000 <= $totalWeight):
          $cost = 89900;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1800){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1100;
          break;
        case($totalWeight < 30):
          $cost = 1600;
          break;
        case($totalWeight < 40):
          $cost = 1900;
          break;
        case($totalWeight < 60):
          $cost = 2600;
          break;
        case($totalWeight < 80):
          $cost = 3100;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 4200;
          break;
        case($totalWeight < 120):
          $cost = 5200;
          break;
        case($totalWeight < 140):
          $cost = 6100;
          break;
        case($totalWeight < 160):
          $cost = 7100;
          break;
        case($totalWeight < 180):
          $cost = 8100;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 9000;
          break;
        case($totalWeight < 250):
          $cost = 9500;
          break;
        case($totalWeight < 300):
          $cost = 11700;
          break;
        case($totalWeight < 350):
          $cost = 14000;
          break;
        case($totalWeight < 400):
          $cost = 16400;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 18800;
          break;
        case($totalWeight < 500):
          $cost = 21200;
          break;
        case($totalWeight < 550):
          $cost = 23600;
          break;
        case($totalWeight < 600):
          $cost = 26000;
          break;
        case($totalWeight < 650):
          $cost = 28400;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 30800;
          break;
        case($totalWeight < 750):
          $cost = 33200;
          break;
        case($totalWeight < 800):
          $cost = 35600;
          break;
        case($totalWeight < 850):
          $cost = 38000;
          break;
        case($totalWeight < 900):
          $cost = 40400;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 42800;
          break;
        case($totalWeight < 1000):
          $cost = 45200;
          break;
        case($totalWeight < 1100):
          $cost = 47500;
          break;
        case($totalWeight < 1200):
          $cost = 52200;
          break;
        case($totalWeight < 1300):
          $cost = 56900;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 61600;
          break;
        case($totalWeight < 1500):
          $cost = 66300;
          break;
        case($totalWeight < 1600):
          $cost = 70900;
          break;
        case($totalWeight < 1700):
          $cost = 75600;
          break;
        case($totalWeight < 1800):
          $cost = 80300;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 85000;
          break;
        case($totalWeight < 2000):
          $cost = 89700;
          break;
        case(2000 <= $totalWeight):
          $cost = 94300;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 1900){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1100;
          break;
        case($totalWeight < 30):
          $cost = 1600;
          break;
        case($totalWeight < 40):
          $cost = 1900;
          break;
        case($totalWeight < 60):
          $cost = 2600;
          break;
        case($totalWeight < 80):
          $cost = 3200;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 4400;
          break;
        case($totalWeight < 120):
          $cost = 5400;
          break;
        case($totalWeight < 140):
          $cost = 6300;
          break;
        case($totalWeight < 160):
          $cost = 7400;
          break;
        case($totalWeight < 180):
          $cost = 8400;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 9400;
          break;
        case($totalWeight < 250):
          $cost = 9900;
          break;
        case($totalWeight < 300):
          $cost = 12200;
          break;
        case($totalWeight < 350):
          $cost = 14600;
          break;
        case($totalWeight < 400):
          $cost = 17100;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 19700;
          break;
        case($totalWeight < 500):
          $cost = 22200;
          break;
        case($totalWeight < 550):
          $cost = 24700;
          break;
        case($totalWeight < 600):
          $cost = 27200;
          break;
        case($totalWeight < 650):
          $cost = 29700;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 32200;
          break;
        case($totalWeight < 750):
          $cost = 34700;
          break;
        case($totalWeight < 800):
          $cost = 37200;
          break;
        case($totalWeight < 850):
          $cost = 39700;
          break;
        case($totalWeight < 900):
          $cost = 42200;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 44700;
          break;
        case($totalWeight < 1000):
          $cost = 47200;
          break;
        case($totalWeight < 1100):
          $cost = 49700;
          break;
        case($totalWeight < 1200):
          $cost = 54600;
          break;
        case($totalWeight < 1300):
          $cost = 59500;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 64400;
          break;
        case($totalWeight < 1500):
          $cost = 69300;
          break;
        case($totalWeight < 1600):
          $cost = 74200;
          break;
        case($totalWeight < 1700):
          $cost = 79100;
          break;
        case($totalWeight < 1800):
          $cost = 84000;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 88900;
          break;
        case($totalWeight < 2000):
          $cost = 93800;
          break;
        case(2000 <= $totalWeight):
          $cost = 98700;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }
    else if ($distance == 2000){
      switch (true){
        case ($totalWeight < 20):
          $cost = 1100;
          break;
        case($totalWeight < 30):
          $cost = 1700;
          break;
        case($totalWeight < 40):
          $cost = 2000;
          break;
        case($totalWeight < 60):
          $cost = 2700;
          break;
        case($totalWeight < 80):
          $cost = 3300;
          break;
        /**/
        case($totalWeight < 100):
          $cost = 4500;
          break;
        case($totalWeight < 120):
          $cost = 5600;
          break;
        case($totalWeight < 140):
          $cost = 6600;
          break;
        case($totalWeight < 160):
          $cost = 7700;
          break;
        case($totalWeight < 180):
          $cost = 8700;
          break;
        /**/
        case($totalWeight < 200):
          $cost = 9800;
          break;
        case($totalWeight < 250):
          $cost = 10300;
          break;
        case($totalWeight < 300):
          $cost = 12700;
          break;
        case($totalWeight < 350):
          $cost = 15300;
          break;
        case($totalWeight < 400):
          $cost = 17900;
          break;
        /**/
        case($totalWeight < 450):
          $cost = 20500;
          break;
        case($totalWeight < 500):
          $cost = 23100;
          break;
        case($totalWeight < 550):
          $cost = 25700;
          break;
        case($totalWeight < 600):
          $cost = 28400;
          break;
        case($totalWeight < 650):
          $cost = 31000;
          break;
        /**/
        case($totalWeight < 700):
          $cost = 33600;
          break;
        case($totalWeight < 750):
          $cost = 36200;
          break;
        case($totalWeight < 800):
          $cost = 38800;
          break;
        case($totalWeight < 850):
          $cost = 41400;
          break;
        case($totalWeight < 900):
          $cost = 44100;
          break;
        /**/
        case($totalWeight < 950):
          $cost = 46700;
          break;
        case($totalWeight < 1000):
          $cost = 49300;
          break;
        case($totalWeight < 1100):
          $cost = 51900;
          break;
        case($totalWeight < 1200):
          $cost = 57000;
          break;
        case($totalWeight < 1300):
          $cost = 62100;
          break;
        /**/
        case($totalWeight < 1400):
          $cost = 67300;
          break;
        case($totalWeight < 1500):
          $cost = 72400;
          break;
        case($totalWeight < 1600):
          $cost = 77500;
          break;
        case($totalWeight < 1700):
          $cost = 82600;
          break;
        case($totalWeight < 1800):
          $cost = 87800;
          break;
        /**/
        case($totalWeight < 1900):
          $cost = 92900;
          break;
        case($totalWeight < 2000):
          $cost = 98000;
          break;
        case(2000 <= $totalWeight):
          $cost = 103100;
          break;
        default:
          $cost = "please enter a valid number";
          break;
      }
    }

    // additional cost
    if($additional == "none") {
      $additional_cost = 0;
    }
    // 東京、大阪
    else if ($additional == "one"){
      switch (true) {
        case ($totalWeight < 20):
          $additional_cost = 100;
          break;
        case($totalWeight < 30):
          $additional_cost = 100;
          break;
        case($totalWeight < 40):
          $additional_cost = 100;
          break;
        case($totalWeight < 60):
          $additional_cost = 100;
          break;
        case($totalWeight < 80):
          $additional_cost = 200;
          break;
        /* */
        case($totalWeight < 100):
          $additional_cost = 200;
          break;
        case($totalWeight < 120):
          $additional_cost = 200;
          break;
        case($totalWeight < 140):
          $additional_cost = 300;
          break;
        case($totalWeight < 160):
          $additional_cost = 300;
          break;
        case($totalWeight < 180):
          $additional_cost = 400;
          break;
        /* */
        case($totalWeight < 200):
          $additional_cost = 400;
          break;
        case($totalWeight < 250):
          $additional_cost = 400;
          break;
        case($totalWeight < 300):
          $additional_cost = 500;
          break;
        case($totalWeight < 350):
         $additional_cost = 600;
          break;
        case($totalWeight < 400):
          $additional_cost = 700;
          break;
        /* */
        case($totalWeight < 450):
         $additional_cost = 800;
          break;
        case($totalWeight < 500):
         $additional_cost = 900;
          break;
        case($totalWeight < 550):
          $additional_cost = 1000;
          break;
        case($totalWeight < 600):
          $additional_cost = 1100;
          break;
        case($totalWeight < 650):
          $additional_cost = 1200;
          break;
        /* */
        case($totalWeight < 700):
          $additional_cost = 1300;
          break;
        case($totalWeight < 750):
          $additional_cost = 1400;
          break;
        case($totalWeight < 800):
          $additional_cost = 1500;
          break;
        case($totalWeight < 850):
         $additional_cost = 1600;
          break;
        case($totalWeight < 900):
          $additional_cost = 1700;
          break;
        /* */
        case($totalWeight < 950):
          $additional_cost = 1800;
          break;
        case($totalWeight < 1000):
          $additional_cost = 1900;
          break;
        case($totalWeight < 1100):
          $additional_cost = 2000;
          break;
        case($totalWeight < 1200):
         $additional_cost = 2200;
          break;
        case($totalWeight < 1300):
          $additional_cost = 2400;
          break;
        /* */
        case($totalWeight < 1400):
          $additional_cost = 2600;
          break;
        case($totalWeight < 1500):
          $additional_cost = 2800;
          break;
        case($totalWeight < 1600):
          $additional_cost = 3000;
          break;
        case($totalWeight < 1700):
          $additional_cost = 3200;
          break;
        case($totalWeight < 1800):
          $additional_cost = 3400;
          break;
        /* */
        case($totalWeight < 1900):
          $additional_cost = 3600;
          break;
        case($totalWeight < 2000):
          $additional_cost = 3800;
          break;
        case(2000 <= $totalWeight):
          $additional_cost = 4000;
          break;
        default:
          break;
      }
    }
    else{
      switch (true) {
        case ($totalWeight < 20):
          $additional_cost = 70;
          break;
        case($totalWeight < 30):
          $additional_cost = 70;
          break;
        case($totalWeight < 40):
          $additional_cost = 70;
          break;
        case($totalWeight < 60):
          $additional_cost = 70;
          break;
        case($totalWeight < 80):
          $additional_cost = 140;
          break;
        /* */
        case($totalWeight < 100):
          $additional_cost = 140;
          break;
        case($totalWeight < 120):
          $additional_cost = 140;
          break;
        case($totalWeight < 140):
          $additional_cost = 210;
          break;
        case($totalWeight < 160):
          $additional_cost = 210;
          break;
        case($totalWeight < 180):
          $additional_cost = 280;
          break;
        /* */
        case($totalWeight < 200):
          $additional_cost = 280;
          break;
        case($totalWeight < 250):
          $additional_cost = 280;
          break;
        case($totalWeight < 300):
          $additional_cost = 350;
          break;
        case($totalWeight < 350):
          $additional_cost = 420;
          break;
        case($totalWeight < 400):
          $additional_cost = 490;
          break;
        /* */
        case($totalWeight < 450):
         $additional_cost = 560;
          break;
        case($totalWeight < 500):
         $additional_cost = 630;
          break;
        case($totalWeight < 550):
          $additional_cost = 700;
          break;
        case($totalWeight < 600):
          $additional_cost = 770;
          break;
        case($totalWeight < 650):
          $additional_cost = 840;
          break;
        /* */
        case($totalWeight < 700):
          $additional_cost = 910;
          break;
        case($totalWeight < 750):
          $additional_cost = 980;
          break;
        case($totalWeight < 800):
          $additional_cost = 1050;
          break;
        case($totalWeight < 850):
          $additional_cost = 1120;
          break;
        case($totalWeight < 900):
          $additional_cost = 1190;
          break;
        /* */
        case($totalWeight < 950):
          $additional_cost = 1260;
          break;
        case($totalWeight < 1000):
          $additional_cost = 1330;
          break;
        case($totalWeight < 1100):
          $additional_cost = 1400;
          break;
        case($totalWeight < 1200):
          $additional_cost = 1540;
          break;
        case($totalWeight < 1300):
          $additional_cost = 1680;
          break;
        /* */
        case($totalWeight < 1400):
          $additional_cost = 1820;
          break;
        case($totalWeight < 1500):
          $additional_cost = 1960;
          break;
        case($totalWeight < 1600):
          $additional_cost = 2100;
          break;
        case($totalWeight < 1700):
          $additional_cost = 2240;
          break;
        case($totalWeight < 1800):
          $additional_cost = 2380;
          break;
        /* */
        case($totalWeight < 1900):
          $additional_cost = 2520;
          break;
        case($totalWeight < 2000):
          $additional_cost = 2660;
          break;
        case(2000 <= $totalWeight):
          $additional_cost = 2800;
          break;
        default:
          break;
      }
    }

    // shipping fee result 
    if (typeof $cost === 'string' || $cost instanceof String)
    {
      $('.shipping-fee').html('please enter a valid number.');
    }
    else if($weight == 0){
      $('.shipping-fee').html('商品を選んでください。');
    }
    else if($distance == 0){
      $('.shipping-fee').html('行き先を選んでください。');
    }
    else {
      $totalCost = $cost + $additional_cost
      // return cost 
      $('.shipping-fee').html('総重量は' + $totalWeight + 'kg、運賃は' + $totalCost +'円です。(割増料' + $additional_cost + '円を含め）');
    }
    
  });