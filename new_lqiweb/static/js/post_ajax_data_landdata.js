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

		$.ajax({
			async : false,
			type: "POST",
			datatype : 'json',
			url : '/landtavg/',
			data : { 
				'country' : country,
				'country_area' : country_area,
				/*'csrfmiddlewaretoken': '{{ csrf_token }}',*/
				 },
			success : function(data){
				var datafinish = []
				if (country_area == '全部'){
					var title = area_form[1]["value"] + "歷年月平均總價"
				}
				else{
					var title = area_form[1]["value"] + country_area + "歷年月平均總價"
				}

				$.ajax({
					url: '/landtavg/',
					dataType: 'json',
					success : function(data){
						console.log(data)

						areakey = Object.keys(data)
						for (var i=0; i<areakey.length; i++){
							if (areakey[i] != 'date'){
								var dataload = {name:areakey[i], data:data[areakey[i]]};
								datafinish.push(dataload)
							}
						}
						

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
			        		text: title
			    		},

			    		subtitle: {
			        		text: '苙寬資訊版權所有'
			    		},

						xAxis:{
							crosshair:{
								enabled:true,
								width: 3,
								/*color: 'red'*/
							},
							
							categories:data['date']
						},

			    		yAxis: {
			        		title: {
			            	text: '總價（萬）'
			        				}
			    		},
			    		tooltip: {
			    			shared: true,
			    			distance: 30,
			    			padding: 5,
			    			split: false
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