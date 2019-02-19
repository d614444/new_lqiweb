$(function(){
	$('#GDP_form').submit(function(event) {
		event.preventDefault();
		var area_form = $('#GDP_form').serializeArray()
		var year_1 = area_form[1]["value"]
		var year_2 = area_form[2]["value"]
		$.ajax({
			async : false,
			type: "POST",
			datatype : 'json',
			url : '/lqi_GDP/',
			data : {
				'year_1' : year_1,
				'year_2' : year_2
			},
			success : function(data){
				$.ajax({
					url : '/lqi_GDP/',
					datatype : 'json',
					success : function(data){
						if (year_1 == '全部'){
							var title = '歷年經濟成長率(GDP)YoY'
						}
						else if (year_2 == '--')
						{
							var title = year_1 + '年經濟成長率(GDP)YoY'
						}
						else
						{
							var title = year_1 + '-' + year_2 +'年經濟成長率(GDP)YoY'
						}
						var datafinish = []
						var dataGDP = {name:'GDP', data:data['GDP']};
						datafinish.push(dataGDP)
						console.log(dataGDP)
											Highcharts.chart('hichart-main', {

			    		title: {
			        		text: title
			    		},

			    		subtitle: {
			        		text: '苙寬資訊版權所有'
			    		},

						xAxis:{
							categories:data['date']
						},

			    		yAxis: {
			        		title: {
			            	text: '%'
			        				}
			    		},
			   			legend: {
			        		layout: 'vertical',
			        		align: 'right',
			        		verticalAlign: 'middle'
			    		},

			    		plotOptions: {

			            	   line: {
           						dataLabels: {
                				enabled: true
            							},			

			        				},
			        			enableMouseTracking: false	
			   		 	},
			    		series:datafinish,
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
		}
	})


	})


});