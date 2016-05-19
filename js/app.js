'use strict';

var $buttons = $('.buttons');
var $screen = $('#screen');
var $clear = $('#clear');
var $equals = $('#equals')


$buttons.on('click', 'span:not(#clear, #equals)', function(event){
  if ($screen.text() !== 'Error'){
  $screen.text($screen.text() + event.target.textContent);
  }
});

$clear.click(function(){
  $screen.text('');
})

$equals.click(function(){
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

})
