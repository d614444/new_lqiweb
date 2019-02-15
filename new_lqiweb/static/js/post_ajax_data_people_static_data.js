$(function(){
		
		var country_list = {
			'臺北市' : "A" , '臺中市' : "B", '基隆市' : "C",
			'臺南市' : "D" , '高雄市' : "E", '新北市' : "F",
			'宜蘭縣' : "G" , '桃園市' : "H", '新竹縣' : "J",
			'新竹市' : "O" ,
		}
		$('#area_people_form').submit(function(event) {
			event.preventDefault();
			var area_form = $('#area_people_form').serializeArray()
			var country = country_list[area_form[1]["value"]]
			var country_area = area_form[2]["value"]
			var year_1 = area_form[3]["value"]
	
		$.ajax({
			async : false,
			type: "POST",
			datatype : 'json',
			url : '/lqistatic/',
			data : { 
				'country' : country,
				'country_area' : country_area,
				'year_1' : year_1,
				 },
			success : function(data){
				var datafinish = []
			
				$.ajax({

					url: '/lqistatic/',
					dataType: 'json',
					success : function(data){

						areakey = Object.keys(data)
						if(country_area=='全部'){
							var title = year_1 +"年" + area_form[1]["value"] + "人口變化"
						}else{
							var title = year_1 +"年" + area_form[1]["value"] + country_area + "人口變化"
						}
						for (var i=0; i<areakey.length; i++){
							/*console.log(areakey[i], data[areakey[i]])*/
							var dataload = {name:areakey[i], data:data[areakey[i]]};
							datafinish.push(dataload)
						}
						

						Highcharts.chart('hichart-main', {

			    		title: {
			        		text: title
			    		},

			    		subtitle: {
			        		text: '苙寬資訊版權所有'
			    		},

						xAxis:{
							categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
						},

			    		yAxis: {
			    			

			        		title: {
			            	text: '人數'
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
