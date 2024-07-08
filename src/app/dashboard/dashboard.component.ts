import { Component, OnInit } from '@angular/core';
import { QuestionsComponent } from '../questions/questions.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataSource:any; 

  questions:any;
  answers:any;
  count=0;
  a:any;

  

  constructor( private question: QuestionsComponent,private router: ActivatedRoute) {
    this.dataSource = sessionStorage.getItem("question");
    this.dataSource = JSON.parse(this.dataSource)
    this.questions = this.question.questions;
    this.answers = this.question.answers;
    if (this.questions && this.questions.length > 1) {

      // for (var i = 0; i < this.answers.length; i++) {
      //   for (var j=0; j < this.questions.length; j++) {
      //     if (this.answers[i].id == this.questions[j].id){
      //       if (this.answers[i].answer == this.questions[j].answer) {
      //         this.count = this.count + 1;
      //       }
      //     }
      //   }
      // }
      
      this.a = sessionStorage.getItem("count");
      if (this.a >= 7) {
        this.dataSource.push (
          {testNum: 1, status: 'Pass',count:this.a
        })
      }
      else {
        this.dataSource.push (
          {testNum: 1, status: 'Fail',count:this.a
        })
      }

      sessionStorage.setItem("question",JSON.stringify(this.dataSource));
    }
   }

   

  ngOnInit(): void {

  }

}
