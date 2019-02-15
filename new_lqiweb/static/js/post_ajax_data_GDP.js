$(function(){
	$('#GDP_form').submit(function(event) {
		event.preventDefault();
		var area_form = $('#GDP_form').serializeArray()
		var year = area_form[1]["value"]
		$.ajax({
			async : false,
			type: "POST",
			datatype : 'json',
			url : '/lqi_GDP/',
			data : {
				'year' : year
			},
			success : function(data){
				$.ajax({
					url : '/lqi_GDP/',
					datatype : 'json',
					success : function(data){
						if(year == '全部'){
							var title = '歷年GDP變化'
						}
						else{
							var title = year + '年GDP變化'
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