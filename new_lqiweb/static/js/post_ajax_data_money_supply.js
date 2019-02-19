$(function(){

$('#money_supply_form').submit(function(event) {
	event.preventDefault();
	var money_supply_form = $('#money_supply_form').serializeArray()
	var year_1 = money_supply_form[2]["value"]
	var year_2 = money_supply_form[3]["value"]
	var money_type = money_supply_form[1]["value"]


	$.ajax({
		async : false,
		type: "POST",
		datatype : 'json',
		url : '/lqi_moneysupply/',
		data : { 
				'year_1' : year_1,
				'year_2' : year_2,
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
						if (money_type == '金額' && year_1 == '全部'){
							var title = '歷年貨幣供給(M1B+M2)金額'
							var ytitle = '(億)'
						}
						else if (money_type == '年增率' && year_1 == '全部'){
							var title = '歷年貨幣供給(M1B+M2)年增率'
							var ytitle = '%'
						}
						else if (money_type == '金額' && year_2 == '--'){
							var title = year_1+'年貨幣供給(M1B+M2)金額'
							var ytitle = '(億)'
						}
						else if (money_type == '年增率' && year_2 == '--'){
							var title = year_1+'年貨幣供給(M1B+M2)年增率'
							var ytitle = '%'
						}
						else if (money_type == '金額' && year_2 != '--'){
							var title = year_1+ '-' + year_2 +'年貨幣供給(M1B+M2)金額'
							var ytitle = '(億)'
						}
						else if (money_type == '年增率' && year_2 != '--'){
							var title =year_1+ '-' + year_2 +'年貨幣供給(M1B+M2)年增率'
							var ytitle = '%'
						}	


						datafinish.push(datam1b)
						datafinish.push(datam2)
						money_key = Object.keys(data)
						/*console.log(data)*/

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