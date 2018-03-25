import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sentiment-chart',
  templateUrl: './sentiment-chart.component.html',
  styleUrls: ['./sentiment-chart.component.scss']
})
export class SentimentChartComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;

  constructor() { }

  ngAfterViewInit() {
    // this.canvas = document.getElementById('myChart');
    // this.ctx = this.canvas.getContext('2d');
    // let myChart = new Chart(this.ctx, {
    //   type: 'doughnut',
    //   data: {
    //     labels: ["Red", "Blue", "Yellow"],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //       ],
    //       borderColor: [
    //         'rgba(255,99,132,1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     animation: {
    //       duration: 1000,
    //     },
    //     responsive: false,
    //     display:true
    //   }
    // });
  }

  ngOnInit() {
  }

}
