import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  buttonDisable= true;
  answers:any = 0;
  skippedQues:any = [];
  questions:any;
  count:any;
  selectedOption:any;
  selectedQuestion:any;
  questionsUrl = 'assets/questions.json'
  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private httpClient: HttpClient,private router: Router) { 
    this.httpClient.get<any>(this.questionsUrl).subscribe(data => {
      this.questions = data;
      this.pager.count = this.questions.length;
    });
  }

  get filteredQuestions() {
    return this.questions
      ? this.questions.slice(
          this.pager.index,
          this.pager.index + this.pager.size
        )
      : [];
  }

  onSelect(question: any, option: any) {
    this.selectedOption = option;
    this.selectedQuestion = question;
    
    if(option.option == "Skip") {
      this.skippedQues.push(question);
      this.goTo(this.pager.index + 1);
    }
    else {
      this.buttonDisable = false;
    }

    if(this.pager.index == 9) {
      this.buttonDisable = false;
    }

  }

  next() {
    this.goTo(this.pager.index + 1);
    this.answers = this.answers + 1;

    if(this.pager.index == 9) {
      sessionStorage.setItem("count",this.answers)
      this.router.navigateByUrl('');
    }
    
  }

  goTo(index: number) {
    this.buttonDisable = true;
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
    }
  }

  ngOnInit(): void {
  }

}
