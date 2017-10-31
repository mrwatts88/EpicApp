import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
declare var $:any;  

@Component({
  selector: 'app-stock-analyzer',
  templateUrl: './stock-analyzer.component.html',
  styleUrls: ['./stock-analyzer.component.css']
})
export class StockAnalyzerComponent implements OnInit {

  tickerSymbol:String = '';
  addedStocks:String[] = [];
  timeFrame = "";
  constructor(private httpServ: HttpServiceService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });
  }

  analyze(){
    this.addedStocks.push(this.tickerSymbol);
    console.log(this.addedStocks);
    this.getStockData(this.tickerSymbol,this.timeFrame);
  }

  getStockData(tickerSymbol:String, timeFrame ) {
    this.httpServ.getStockData(tickerSymbol, timeFrame).subscribe(res => {
      console.log(res);
    })
  }

}