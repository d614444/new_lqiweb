$(function(){

	$('#total-price-enabled').prop('checked', false);
	$('#single-price-enabled').prop('checked', false);

	$(".delete-button").click(function() {
		$('.form-check > input[type=checkbox]').prop('checked', false);
		$("#single-price").slider("disable")
		$("#total-price").slider("disable")
		$('.form-related').attr('disabled', false)
	});



	$('#total-price').slider();
	$('#single-price').slider();

	$('#total-price-enabled').click(function() {
		if(this.checked){
			$('#total-price').slider('enable')
			$('#total-price-checkbox').attr('disabled', true)
		}
		else{
			$('#total-price').slider('disable')
			$('#total-price-checkbox').attr('disabled', false)
		}
	})

	$('#single-price-enabled').click(function() {
		if(this.checked){
			$('#single-price').slider('enable')
			$('#single-price-checkbox').attr('disabled', true)
		}
		else{
			$('#single-price').slider('disable')
			$('#single-price-checkbox').attr('disabled', false)
		};
	});

	$('#total-price-checkbox').click(function() {
		if(this.checked){
			$('#total-price-enabled').attr('disabled', true)
		}
		else{
			$('#total-price-enabled').attr('disabled', false)
		};
	});

	$('#single-price-checkbox').click(function() {
		if(this.checked){
			$('#single-price-enabled').attr('disabled', true)
		}
		else{
			$('#single-price-enabled').attr('disabled', false)
		};
	});

});