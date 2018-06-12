import Highcharts from 'highcharts'

const columnConfig = configObj => {
   Highcharts.chart(configObj.containerID, {
      chart: {
         type: 'column',
         backgroundColor: '#F9F9F9'
      },
      title: {
         text: configObj.title
      },
      xAxis: {
         type: 'category',
         labels: {
            rotation: -45,
            style: {
               fontSize: '13px',
               fontFamily: 'Verdana, sans-serif'
            }
         }
      },
      yAxis: {
         min: 0,
         title: {
            text: configObj.yAxis
         }
      },
      legend: {
         enabled: false
      },
      tooltip: {
         pointFormat: configObj.toolTip
      },
      series: [{
         name: configObj.containerID,
         data: configObj.data,
         dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            y: 10, // 10 pixels down from the top
            style: {
               fontSize: '13px',
               fontFamily: 'Verdana, sans-serif'
            }
         }
      }]
   });
}

export default columnConfig