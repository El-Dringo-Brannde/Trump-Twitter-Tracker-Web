import Highcharts from 'highcharts';
import wordcloud from 'highcharts/modules/wordcloud';
wordcloud(Highcharts);

const wordCloudConfig = data => {
   Highcharts.chart('wordcloud', {
      chart: {
         backgroundColor: '#03A9F4'
      },
      series: [{
         type: 'wordcloud',
         data: data,
         name: 'Occurrences'
      }],
      title: {
         text: 'Most Common Words Trump Tweets'
      }
   });
}

export default wordCloudConfig