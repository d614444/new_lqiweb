$(function(){
		var country_list = {
			'臺北市' : "A" , '臺中市' : "B", '基隆市' : "C",
			'臺南市' : "D" , '高雄市' : "E", '新北市' : "F",
			'宜蘭縣' : "G" , '桃園市' : "H", '新竹縣' : "J",
			'新竹市' : "O" ,
		}
		$('#area_form').submit(function(event) {
			event.preventDefault();
			var area_form = $('#area_form').serializeArray()
			var country = country_list[area_form[1]["value"]]
			var country_area = area_form[2]["value"]
			var year_1 = area_form[3]["value"]
			var year_2 = area_form[4]["value"]		
		$.ajax({
			async : false,
			type: "POST",
			datatype : 'json',
			url : '/testavg/',
			data : { 
				'country' : country,
				'country_area' : country_area,
				'year_1' : year_1,
				'year_2' : year_2,
				'csrfmiddlewaretoken': '{{ csrf_token }}',
				 },
			success : function(data){
				$.ajax({
					url: '/testavg/',
					dataType: 'json',
					success : function(data){
						console.log(data);

						Highcharts.chart('hichart-main', {

			    		title: {
			        		text: 'Solar Employment Growth by Sector, 2010-2016'
			    		},

			    		subtitle: {
			        		text: 'Source: thesolarfoundation.com'
			    		},

						xAxis:{
							categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
						},

			    		yAxis: {
			        		title: {
			            	text: 'Number of Employees'
			        				}
			    		},
			   			legend: {
			        		layout: 'vertical',
			        		align: 'right',
			        		verticalAlign: 'middle'
			    		},

			    		plotOptions: {
			        		series: {
			            		label: {
			                		connectorAllowed: true
			            				},

			        				}
			   		 	},
			    		series:data,
			    		responsive: {
			        		rules: [{
			            		condition: {
			               			 maxWidth: 500
			           				 		},
			            		chartOptions: {
			                		legend: {
			                    	layout: 'horizontal',
			                    	align: 'center',
			                    	verticalAlign: 'bottom'
			               			 		}
			            				}
			        				}]
			    				}
						});
				}	
			})
		},
			error : function(data) {
				console.log("fail")
				}	
			})
		})
	});