import { Component } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-catagory',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-catagory.component.html',
  styleUrl: './sales-by-catagory.component.scss'
})
export class SalesByCatagoryComponent {

  chart = new Chart({
    chart: {
      type:'pie',
      height: 325
    },
    title: {
      text: 'category wise sales'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances',
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Electronics',
            y: 41,
            color: '#044342'
          },
          {
            name: 'Groceries',
            y: 33.8,
            color: '#7e0505',
          },
          {
            name: 'Cosmetics',
            y: 6.5,
            color: '#ed9e20',
          },
          {
            name: 'Clothes',
            y: 15.2,
            color: '#6920fb',
          },
          {
            name: 'Appliances',
            y: 3.5,
            color: '#121212',
          }
        ]
      }
    ],
    credits: {
      enabled: false
    }
  })
}
