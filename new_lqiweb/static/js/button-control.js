$(function(){
	$('#total-price-enabled').prop('checked', false);
	$('#single-price-enabled').prop('checked', false);

	$(".delete-button").click(function() {
		$('input[type=checkbox]').prop('checked', false);
		$("#single-price").slider("disable")
		$("#total-price").slider("disable")
	});

	$("#total-price").slider();

	$('#total-price-enabled').click(function(){
	if(this.checked){
		$("#total-price").slider("enable");

	}
	else{
		$("#total-price").slider("disable")
	}
	});

	$("#single-price").slider();

	$('#single-price-enabled').click(function(){
	if(this.checked){
		$("#single-price").slider("enable");

	}
	else{
		$("#single-price").slider("disable")
	}
	});

})
