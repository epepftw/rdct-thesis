import { Component, OnInit } from '@angular/core';
import {Chart, registerables } from 'node_modules/chart.js';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent implements OnInit {

  constructor() { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let dateChart = new Chart("chart", {
      type: 'line',
      data: {
          labels: ['January','February','March','April','May','June','July','August','September'],
          datasets: [{
              label: 'Added Licenses',
              data: [20, 30, 47, 70, 60, 70, 60, 80, 90],
              fill: true,
              backgroundColor: '	#FFA07A',
              tension: 0.6,
          }]
      }
  });
  
  let dateGraph = new Chart("graph", {
      type: 'line',
      data: {
          labels: ['January','February','March','April','May','June','July','August','September'],
          datasets: [{
              label: 'Added Advertisers',
              data: [20, 30, 47, 30, 60, 40, 60, 80, 90],
              fill: true,
              backgroundColor: '#3CB371'
          }]
      }
  });
  
  }

}
