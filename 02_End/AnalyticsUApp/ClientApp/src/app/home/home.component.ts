import { Component } from '@angular/core';
import { AnalyticsServices } from '../service';
import { MonthlyAnalytics } from '../models/TransferDTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  monthlydata: MonthlyAnalytics[] = []
  basicData: any;
  basicOptions: any;
  dataset: number[] = [];
  labels: string[] = [];

  constructor(private anaService: AnalyticsServices){
   
  }

  ngOnInit(){
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.anaService.getData().subscribe(res => {
      console.log(res)
      this.monthlydata = res;
      this.createLabels(res)
      this.createDataSet(res)
      this.basicData = {
        labels: this.labels,
        datasets: [{
          label: 'Profits',
          data: this.dataset,
          borderWidth: 1
        }]
      }
    }, error => console.error(error));

    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          y: {
              beginAtZero: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          x: {
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          }
      }
  };
  }

  createLabels(data: MonthlyAnalytics[]){
      data.forEach( d => {
        this.labels.push( d.monthText)
      })
  }
  createDataSet(data: MonthlyAnalytics[]){
    data.forEach(d => {
      this.dataset.push(d.monthSum)
    })
  }
}
