import React from 'react';
import Chart from "react-google-charts";
// @ts-ignore
import * as data from './data.json';


import './App.css';

const scholar_list = data['Results'];
console.log(scholar_list);


function App() {
  return (
    <div className="App-header">
      <Chart
          width={'500px'}
          height={'300px'}
          chartType="Timeline"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: 'string', id: 'Term' },
              { type: 'string', id: 'Name' },
              { type: 'date', id: 'Start' },
              { type: 'date', id: 'End' },
            ],

            ['1', 'Abu Hanifa', new Date(Date.UTC(80, 1, 1)), new Date(Date.UTC(150, 1, 1))],
            ['2', 'Malik', new Date(93, 1, 1), new Date(179, 1, )],
            ['3', 'Al Shafi', new Date(150, 1, 1), new Date(204, 1, 1)],
            ['4', 'Ahmed ibn Hanbal', new Date(164, 1, 1), new Date(241, 1, 1)],
          ]}
          rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
}

export default App;
