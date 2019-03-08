$(function(){
var country_list = {
			'臺北市' : "A" , '臺中市' : "B", '基隆市' : "C",
			'臺南市' : "D" , '高雄市' : "E", '新北市' : "F",
			'宜蘭縣' : "G" , '桃園市' : "H", '新竹縣' : "J",
			'新竹市' : "O" ,
		};

$('#muilti_form').submit(function(event) {
		event.preventDefault();
		var area_form = $('#muilti_form').serializeArray()
		var country = country_list[area_form[1]["value"]]
		var country_area = area_form[2]["value"]

		$.ajax({
			url: '/lqi_multi/',
			type: 'POST',
			dataType: 'json',
			data: {'country': country,
				   'country_area' : country_area
				  }
		})


$('#hichart-main').bind('mousemove touchmove touchstart', function(e) {
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
	url:'/lqi_multi/',
	dataType: 'json',
	success : function(activity) {
	$('#hichart-main').empty();
    $.each(activity.datasets, function(i, dataset) {
    	
      dataset.data = Highcharts.map(dataset.data, function(val, j) {
        return [activity.xData[j], val];
      });
      console.log(activity)

      $('<div class="chart">')
        .appendTo('#hichart-main')
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

})
});