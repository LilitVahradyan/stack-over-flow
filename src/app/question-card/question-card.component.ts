import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  
  @Input() question: Question;
  @Input() sort: Function;
  
  upVote() {
    this.question.votes++; 
  }

  downVote() {
    this.question.votes--;
    this.sort();
  }
  
}

type  Question = {
  question: string;
  description: string;
  votes?: number;
  date: Date
}