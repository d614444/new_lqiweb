$(function(){

var year = ['全部','100','101',
			'102', '103','104',
			'105','106','107'];
var money_type = [
				'金額', '年增率'
					]			

for (var i=0; i<year.length; i++){
	$('#money-supply-time')
		.append($("<option></option>")
		.attr('value', year[i])
		.text(year[i]))
		}

for (var i=0; i<money_type.length; i++){
	$('#money-supply-type')
		.append($("<option></option>")
		.attr('value', money_type[i])
		.text(money_type[i]))
		}
	});