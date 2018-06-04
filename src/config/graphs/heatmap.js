import Highcharts from 'highcharts'
import heatmap from 'highcharts/modules/heatmap'
heatmap(Highcharts)

const heatMapConfig = data => {
   Highcharts.chart('heatmap', {
      chart: {
         type: 'heatmap',
         backgroundColor: '#F44336'
      },
      title: {
         text: 'Trump Tweet Times',
         style: {
            color: '#FFFFFF'
         }
      },
      xAxis: {
         categories: ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM',
            '9AM', '19AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM',
            '9PM', '10PM', '11PM', '12PM'],
         labels: {
            style: {
               color: '#FFFFFF'
            }
         }
      },
      yAxis: {
         categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"],
         title: null,
         labels: {
            style: {
               color: '#FFFFFF'
            }
         }
      },
      colorAxis: {
         min: 0,
         minColor: '#FFFFFF',
         maxColor: Highcharts.getOptions().colors[0]
      },
      legend: {
         align: 'right',
         layout: 'vertical',
         backgroundColor: '#FFFFFF',
         margin: 5,
         verticalAlign: 'top',
         y: 50,
         symbolHeight: 280
      },
      tooltip: {
         formatter: function() {
            return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> totaled <br><b>' +
               this.point.value + '</b> tweets <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
         }
      },
      series: [{
         name: 'Trump Tweets By Hour In Week',
         data: data,
         dataLabels: {
            enabled: true,
            color: '#000000'
         }
      }]
   });
}

export default heatMapConfig