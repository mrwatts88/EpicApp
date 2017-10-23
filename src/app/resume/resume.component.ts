import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  
  pdfSrc: string = '../../assets/Resume.pdf';

  constructor(private httpServ:HttpServiceService) { }
  
  ngOnInit() {
  }

  private download(){
    this.httpServ.getResume().subscribe(res =>{
      saveAs(res,"MatthewWattsResume.pdf");
      let fileURL = URL.createObjectURL(res);
      window.open(fileURL);
  });
  }
}
