$(function(){

$('#money_supply_form').submit(function(event) {
	event.preventDefault();
	var money_supply_form = $('#money_supply_form').serializeArray()
	var year = money_supply_form[1]["value"]
	var money_type = money_supply_form[2]["value"]

	$.ajax({
		async : false,
		type: "POST",
		datatype : 'json',
		url : '/lqi_moneysupply/',
		data : { 
				'year' : year,
				'money_type' : money_type,
			},
			success : function(data){
				$.ajax({
					url : '/lqi_moneysupply/',
					datatype : 'json',
					success : function(data){
						var datafinish = []
						var datam1b = {name:'m1b', data:data['m1b']};
						var datam2 = {name : 'm2', data:data['m2']}
						if (money_type == '金額' && year == '全部'){
							var title = 'M1B與M2歷年金額'
							var ytitle = '(億)'
						}
						else if (money_type == '年增率' && year == '全部'){
							var title = 'M1B與M2歷年年增率'
							var ytitle = '%'
						}
						else if (money_type == '金額'){
							var title = year+'年M1B與M2金額'
							var ytitle = '(億)'
						}
						else if (money_type == '年增率'){
							var title = year+'年M1B與M2年增率'
							var ytitle = '%'
						}


						datafinish.push(datam1b)
						datafinish.push(datam2)
						money_key = Object.keys(data)
						console.log(data)

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
			            	text: ytitle
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
			},
			error : function(data) {
				console.log("fail")
				}	

		})
	})			
});