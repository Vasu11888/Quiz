import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpServiceService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  a:any;
  constructor(private http:HttpClient,
              private httpService:HttpServiceService) {

  }
  ngOnInit() {
    this.a = [];
    sessionStorage.setItem("question",JSON.stringify(this.a));
  }
  ngAfterViewInit() {
    //this.child.nativeElement.style.color="red";
  }
}
