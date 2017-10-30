import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ResponseContentType } from '@angular/http';
@Injectable()
export class HttpServiceService {
  constructor(
    private http: Http
  ) { }

  getResume() {
    return this.http.get('resumedownload',
      { responseType: ResponseContentType.Blob })
      .map((res) => {
        return new Blob([res.blob()], { type: 'application/pdf' })
      })
  }

  getStockData(){
    return this.http.get('getStockData',{responseType: ResponseContentType.Json}).map((res) =>{
      return res;
    })
  
  }

}