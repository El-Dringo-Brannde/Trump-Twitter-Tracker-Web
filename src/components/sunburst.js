import React from 'react'
import SkewedContainer from "sc-react";

import Highcharts from 'highcharts';
import sunburst from 'highcharts/modules/sunburst';
import Axios from 'axios';
sunburst(Highcharts);

export default class SunBurst extends React.Component {
   async componentDidMount() {
      let { data } = await Axios.get('http://localhost:3005/words/types')
      Highcharts.chart('sunburst', {
         chart: {
            height: '100%'
         },
         title: {
            text: 'Popular Trump Tweet Words In The Last 365 Days'
         },
         series: [{
            type: "sunburst",
            data: data,
            allowDrillToNode: true,
            cursor: 'pointer',
            dataLabels: {
               format: '{point.name}',
               filter: {
                  property: 'innerArcLength',
                  operator: '>',
                  value: 16
               }
            },
            levels: [{
               level: 1,
               levelIsConstant: false,
               dataLabels: {
                  rotationMode: 'parallel',
                  filter: {
                     property: 'outerArcLength',
                     operator: '>',
                     value: 64
                  }
               }
            }, {
               level: 2,
               colorByPoint: true,
               dataLabels: {
                  rotationMode: 'parallel'
               }
            }]
         }],
         tooltip: {
            headerFormat: "",
            pointFormat: 'Used <b>{point.name}</b> a total of <b>{point.value}</b> times'
         }
      });
   }

   render() {
      return (
         <SkewedContainer
            top='right'
            bottom="left"
            bgColor="#9C27B0"
            noMargin
            style={{ width: '100%' }}>
            <div id='sunburst' ></div>
         </SkewedContainer>
      )
   }
}

