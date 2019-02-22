$(function(){
	$('#GDP_form').submit(function(event) {
		event.preventDefault();

		$.ajax({
				url : '/lqi_GDP/',
				datatype : 'json',
				success : function(data){

						var datafinish = []
						var dataGDP = {name:'GDP', data:data['GDP']};
						datafinish.push(dataGDP)

						Highcharts.setOptions({
						lang: {
							resetZoom: '恢復縮放'
						},
						chart: {
							style: {
								fontFamily: '微軟正黑體'
							}

						}

						})	
						Highcharts.chart('hichart-main', {

						chart: {
							zoomType: 'xy',
							resetZoomButton: {
								position: {
									x: 0,
									y: -40
								},
							}
						},						

			    		title: {
			        		text: '經濟成長率(GDP)YoY'
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
		



	})


});