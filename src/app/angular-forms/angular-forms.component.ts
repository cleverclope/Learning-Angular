import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './requirements/question-base';
import { QuestionService } from './requirements/question.service';

@Component({
  selector: 'app-angular-forms',
  template: `
  <div>
    <h2>Job Application for Heroes</h2>
    <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
  </div>
`,
providers:  [QuestionService],

  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
  ngOnInit(): void {
  }

}
