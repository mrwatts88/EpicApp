import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-stock-analyzer',
  templateUrl: './stock-analyzer.component.html',
  styleUrls: ['./stock-analyzer.component.css']
})
export class StockAnalyzerComponent implements OnInit {

  constructor(private httpServ:HttpServiceService) { }

  ngOnInit() {
  }


  getStockData(){
    this.httpServ.getStockData().subscribe(res =>{
      console.log(res);
    })
  }

}
