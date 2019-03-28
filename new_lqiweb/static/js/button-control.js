$(function(){


	$(".static-button-option").click(function(){
		var a = ($(this).attr('id').slice(-2))
		if ($('#sidebar-menu'+a).hasClass('toggled'))
		{
			$('#sidebar-menu'+a).removeClass('toggled')
			$('#page-content-wrapper').removeClass('active')
			return false
		}

		$('.sidebar-menu').removeClass('toggled')
		$('#sidebar-menu'+a).addClass('toggled')
		$('#page-content-wrapper').addClass('active')
			return false
	
		})

	

})
