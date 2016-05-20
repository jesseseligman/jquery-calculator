'use strict';

var $buttons = $('.buttons');
var $screen = $('#screen');
var $clear = $('#clear');
var $equals = $('#equals')

var clear = function(event){
  $screen.text('');
}

var evaluate = function(){
  if (/^\d+$/.test($screen.text())) {
    return;
  } else if (/^-?\d+[+-x÷]\d+$/.test($screen.text())){
    var operand1, operator, operand2;
    var match = $screen.text().match(/(^-?\d+)([+-x÷])(\d+$)/);

    [operand1, operator, operand2] = [parseInt(match[1], 10), match[2], parseInt(match[3], 10)];

    var evaluator = {
      '+': operand1 + operand2,
      '-': operand1 - operand2,
      'x': operand1 * operand2,
      '÷': operand1 / operand2
    };

    $screen.text(evaluator[operator]);
  } else {
    $screen.text('Error');
  }

};

$buttons.on('click', 'span:not(#clear, #equals)', function(event){
  if ($screen.text() !== 'Error'){
  $screen.text($screen.text() + event.target.textContent);
  }
});

$clear.click(clear);


$equals.click(evaluate);

$(document).keydown(function(event){
  if ((event.which > 47) && (event.which < 58)){
    event.preventDefault();
    $screen.text($screen.text() + (event.which - 48));
  }
  else if (event.which === 27){
    clear();
  }
  else if (event.which === 189){
      $screen.text($screen.text() + '-');
    }
  else if (event.which === 187){
      $screen.text($screen.text() + '+');
    }
  else if (event.which === 191){
      $screen.text($screen.text() + '÷');
    }
  else if (event.which === 88){
      $screen.text($screen.text() + 'x');
    }
  else if (event.which === 13){
      evaluate();
    }

  console.log(event.which);
})
