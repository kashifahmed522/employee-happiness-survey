import { Component, OnInit } from '@angular/core';
import { Chart ,registerables} from 'chart.js';

@Component({
  selector: 'app-happiness-index-metrics',
  templateUrl: './happiness-index-metrics.component.html',
  styleUrls: ['./happiness-index-metrics.component.scss']
})
export class HappinessIndexMetricsComponent implements OnInit {
  chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.createChart();
  }
  createChart() {
    // Load chart data
    let data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Happy',
          data: [20, 25, 30, 35, 40, 45],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Neutral',
          data: [30, 35, 40, 45, 50, 55],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Unhappy',
          data: [50, 55, 60, 65, 70, 75],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          fill: false
        }
      ]
    };

    // Create chart object
    this.chart = new Chart('happinessChart', {
      type: 'bar',
      data: data
    });
  }

}
