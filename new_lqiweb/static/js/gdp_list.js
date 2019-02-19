$(function(){

var year = ['全部','100','101',
			'102', '103','104',
			'105','106','107'];

for (var i=0; i<year.length; i++){
	$('#GDP-time-1')
		.append($("<option></option>")
		.attr('value', year[i])
		.text(year[i]))
		}
	$('#GDP-time-1').change(function(){
			$('#GDP-time-2').empty();
			if ($('#GDP-time-1').val()== '全部'){
				$('#GDP-time-2')
				.append($('<option></option>')
					.text('--'));
		}else{
			for (var i = 0; i<year.length; i++){
				if ($('#GDP-time-1').val() == year[i]){
					var year_value = $('#GDP-time-1').val()
					var year_locate = year.indexOf(year_value)
					$('#GDP-time-2')
					.append($('<option></option>')
						.text('--'));

					for (var g = year_locate ; g<year.length; g++){
						var count_n =g+1;
						$('#GDP-time-2')
						.append($('<option></option>')
							.attr('value',year[count_n])
							.text(year[count_n]));
						$('#GDP-time-2 > option').filter(function(){
						 	return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
					}).remove()
					}}
		}}});
		$('#GDP-time-1').change();	

});