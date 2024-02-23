import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  standalone: true,
  imports: [ChartModule,CommonModule],
  templateUrl: './top-three-products.component.html',
  styleUrl: './top-three-products.component.scss'
})
export class TopThreeProductsComponent {

  chart = new Chart({
    chart: {
      type:'bar',
      height: 225
    },
    title: {
      text: 'Top 3 products'
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        type: 'bar',
        data: [
          {
            name: 'Lenova Thinkpad E15',
            y: 41,
            color: '#044342'
          },
          {
            name: 'Nectar Orange Juice',
            y: 33.8,
            color: '#7e0505',
          },
          {
            name: 'CosAxe Deodarantmetics',
            y: 6.5,
            color: '#ed9e20',
          }
        ]
      }
    ],
    credits: {
      enabled: false
    }
  })
}
