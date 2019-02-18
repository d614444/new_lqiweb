$(function(){

var year = ['全部','100','101',
			'102', '103','104',
			'105','106','107'];
var money_type = [
				'金額', '年增率'
					]			

for (var i=0; i<year.length; i++){
	$('#money-supply-time-1')
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

	$('#money-supply-time-1').change(function(){
			$('#money-supply-time-2').empty();
			if ($('#money-supply-time-1').val()== '全部'){
				$('#money-supply-time-2')
				.append($('<option></option>')
					.text('--'));
		}else{
			for (var i = 0; i<year.length; i++){
				if ($('#money-supply-time-1').val() == year[i]){
					var year_value = $('#money-supply-time-1').val()
					var year_locate = year.indexOf(year_value)
					$('#money-supply-time-2')
					.append($('<option></option>')
						.text('--'));

					for (var g = year_locate ; g<year.length; g++){
						var count_n =g+1;
						$('#money-supply-time-2')
						.append($('<option></option>')
							.attr('value',year[count_n])
							.text(year[count_n]));
						$('#money-supply-time-2 > option').filter(function(){
						 	return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
					}).remove()
					}}
		}}});
		$('#money-supply-time-1').change();	
	});