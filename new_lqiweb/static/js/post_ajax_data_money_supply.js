$(function(){

$('#money_supply_form').submit(function(event) {
	event.preventDefault();
	var money_supply_form = $('#money_supply_form').serializeArray()
	var money_type = money_supply_form[1]["value"]
	console.log(money_supply_form)


	$.ajax({
		async : false,
		type: "POST",
		datatype : 'json',
		url : '/lqi_moneysupply/',
		data : { 

				'money_type' : money_type,
			},
			success : function(data){
				$.ajax({
					url : '/lqi_moneysupply/',
					datatype : 'json',
					success : function(data){
						var datafinish = []
						var datam1b = {name:'M1B', data:data['M1B']};
						var datam2 = {name : 'M2', data:data['M2']}
						if (money_type == '金額'){
							var title = '貨幣供給金額M1B+M2'
							var ytitle = '（億）' 
						}
						else{
							var title = '貨幣供給年增率M1B+M2'
							var ytitle = '%'
						}


						datafinish.push(datam1b)
						datafinish.push(datam2)
						money_key = Object.keys(data)
						/*console.log(data)*/

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
			        		text: title,
			        		style: {
			        			fontFamily: '微軟正黑體'
			        		}
			    		},

			    		subtitle: {
			        		text: '苙寬資訊版權所有'
			    		},

						xAxis:{
							crosshair:{
								enabled:true,
								width: 3
							},
							categories:data['date']
						},

			    		yAxis: {
			        		title: {
			            	text: ytitle
			        				}
			    		},
			   			legend: {
			        		layout: 'vertical',
			        		align: 'right',
			        		verticalAlign: 'middle'
			    		},
			    		tooltip: {
			    			shared: true,
			    			distance: 30,
			    			padding: 5
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
			               			 maxWidth: 700
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