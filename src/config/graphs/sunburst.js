import Highcharts from 'highcharts';
import sunburst from 'highcharts/modules/sunburst';

sunburst(Highcharts);

const sunBurstConfig = (data) => {
  Highcharts.chart('sunburst', {
    chart: {
      height: '70%',
      backgroundColor: '#9C27B0',
    },
    title: {
      text: 'Popular Trump Tweet Words In The Last 365 Days',
      style: {
        color: '#FFFFFF',
      },
    },
    series: [
      {
        type: 'sunburst',
        data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
          format: '{point.name}',
          filter: {
            property: 'innerArcLength',
            operator: '>',
            value: 16,
          },
        },
        levels: [
          {
            level: 1,
            levelIsConstant: false,
            dataLabels: {
              rotationMode: 'parallel',
              filter: {
                property: 'outerArcLength',
                operator: '>',
                value: 64,
              },
            },
          },
          {
            level: 2,
            colorByPoint: true,
            dataLabels: {
              rotationMode: 'parallel',
            },
          },
        ],
      },
    ],
    tooltip: {
      headerFormat: '',
      pointFormat:
				'Used <b>{point.name}</b> a total of <b>{point.value}</b> times',
    },
  });
};

export default sunBurstConfig;
