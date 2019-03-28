$(function(){
	

		$('#static-form').submit(function(event) {
			event.preventDefault();
			var min = $('#total-price').attr('data-value');
			console.log(min)
			var data_add ={ 'static_active[]' : [] }
			/*data_add['static_active[]'].push($(this).val());*/
			$(":checked").each(function(){
				if (this.id=='total-price-enabled'){
					var data_total = $('#total-price').attr('data-value')
					data_add['static_active[]'].push('總價區間,'+data_total)
				}
				else if(this.id=='single-price-enabled'){
					var data_single = $('#single-price').attr('data-value')
					data_add['static_active[]'].push('單價區間,'+data_single)
				}
				else{
					data_add['static_active[]'].push($(this).val());
	
				}

			});
			
		$.ajax({
			async : false,
			type: "POST",
			datatype : 'json',
			url : '/lqistatic/',
			data : data_add,
		});
$('#container').bind('mousemove touchmove touchstart', function(e) {
  var chart,
    point,
    i,
    event;

  for (i = 0; i < Highcharts.charts.length; i = i + 1) {
    chart = Highcharts.charts[i];
    
    if (chart && chart.options.chart.isSynced) {
      // Find coordinates within the chart
      event = chart.pointer.normalize(e.originalEvent);
      // Get the hovered point
      point = chart.series[0].searchPoint(event, true);

      if (point) {
        point.highlight(e);
      }
    }
  }
});

Highcharts.wrap(Highcharts.Chart.prototype, 'zoomOut', function(proceed){
	proceed.apply(this, Array.prototype.slice.call(arguments,1));

	Highcharts.charts.forEach(function(chart){
		if (chart !== this){
			chart.yAxis[0].setExtremes(null, null, undefined, false);
		}
	}, this)
});

Highcharts.wrap(Highcharts.Chart.prototype, 'showResetZoom', function(proceed){
	var visibleBtn = false;

	Highcharts.charts.forEach(function(chart){
		if (chart.resetZoomButton){
			visibleBtn = true;
		}
	});
	if (!visibleBtn){
		proceed.apply(this, Array.prototype.slice.call(arguments, 1));
	}
})
/**
 * Override the reset function, we don't need to hide the tooltips and
 * crosshairs.
 */
Highcharts.Pointer.prototype.reset = function() {
  return undefined;
};

/**
 * Highlight a point by showing tooltip, setting hover state and draw crosshair
 */
Highcharts.Point.prototype.highlight = function(event) {
  event = this.series.chart.pointer.normalize(event);
  this.onMouseOver(); // Show the hover marker
  /*this.series.chart.tooltip.refresh(this); // Show the tooltip
  this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair*/
};

/**
 * Synchronize zooming through the setExtremes event handler.
 */

function syncExtremes(e) {
  var thisChart = this.chart;

  if (e.trigger !== 'syncExtremes') { // Prevent feedback loop
    Highcharts.each(Highcharts.charts, function(chart) {
      if (chart !== thisChart) {
        if (chart.xAxis[0].setExtremes) { // It is null while updating
          chart.xAxis[0].setExtremes(
            e.min,
            e.max,
            undefined,
            false, {
              trigger: 'syncExtremes'
            }
          );
        }
      }
    });
  }
}

// Get the data. The contents of the data file can be viewed at
$.ajax({
	url:'/lqistatic/',
	dataType: 'json',
	success : function(activity) {
	$('#container').empty();
    $.each(activity.datasets, function(i, dataset) {
    	
      dataset.data = Highcharts.map(dataset.data, function(val, j) {
       return [activity.xData[j], val];
      });
      console.log(activity)

      $('<div class="chart">')
        .appendTo('#container')
        .highcharts({
          chart: {
          	zoomType: 'xy',
          	isSynced: true,
            marginLeft: 40, // Keep all charts left aligned
            height:300,
            spacingTop: 20,
            spacingBottom: 20
          },
          title: {
            text: dataset.name,
            align: 'left',
            margin: 0,
            x: 30
          },
          credits: {
            enabled: false
          },
          legend: {
            enabled: false
          },

          xAxis: {

			crosshair:{
			 	enabled:false,
				width: 3
				},
            events: {
                setExtremes: syncExtremes
            },
            categories: activity.xData,

            labels: {
              format: '{value}月 '
            }
          },
          yAxis: {
  
            title: {
              text: null
            }
          },
          plotOptions: {

			line: {
           			dataLabels: {
                	enabled: true
            					},			
			        	},
			    enableMouseTracking: false	
			   		 	},

          series: [{
            data: dataset.data,
            name: dataset.name,
            type: dataset.type,
            color: Highcharts.getOptions().colors[i],
            fillOpacity: 0.3,
            animation: {
              duration: 3000,
            },
            tooltip: {
              valueSuffix: ' ' + dataset.unit,
              
            }
          }]

        });
    });
  }
});

	});







});

