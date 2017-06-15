

import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const Chart = (props) => {
  const data = {
    labels: [
      'Stocks',
      'Bonds',
      'ETFs',
      'Cash',
      'Commodities',
    ],
    datasets: [{
      data: props.data || [],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#0000FF',
        '#000000',

      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#0000FF',
        '#000000',
      ],
	 }],
  };

 	return (

   <div>
     <h2>Chart Challenge React Redux Chartjs-2</h2>
     <Doughnut data={data} />
   </div>
 );
};


export default Chart;
