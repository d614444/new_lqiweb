$(function(){

var year = ['全部','100','101',
			'102', '103','104',
			'105','106','107'];

for (var i=0; i<year.length; i++){
	$('#GDP-time')
		.append($("<option></option>")
		.attr('value', year[i])
		.text(year[i]))
		}

});