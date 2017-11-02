import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
declare var $: any;

@Component({
  selector: 'app-stock-analyzer',
  templateUrl: './stock-analyzer.component.html',
  styleUrls: ['./stock-analyzer.component.css']
})
export class StockAnalyzerComponent implements OnInit {

  tickerSymbol: String = '';
  addedStocks: String[] = [];
  timeFrame = "";
  strategyDisplayed = 'gap';

  constructor(private httpServ: HttpServiceService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  }

  analyze() {
    if (this.addedStocks.indexOf(this.tickerSymbol) == -1 && this.tickerSymbol != '') {
      this.addedStocks.push(this.tickerSymbol);
      this.getStockData(this.tickerSymbol, this.timeFrame);
      this.tickerSymbol = '';
    }   
  }

  getStockData(tickerSymbol: String, timeFrame) {
    this.httpServ.getStockData(tickerSymbol, timeFrame).subscribe(res => {
      console.log(res);
    })
  }

  removeStock(stock){
    this.addedStocks.splice(stock,1);
    console.log(stock);
  }

  setStrategySwitch(strategy){
    this.strategyDisplayed = strategy;
  }

}
