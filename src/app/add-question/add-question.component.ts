import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

  question = '';
  description = '';
  votes = null;

  @Output() onAddQuestion = new EventEmitter<Question>();
  
  addQuestion() {
    this.onAddQuestion.emit({ 
      question: this.question, 
      description: this.description, 
      date: new Date(), 
      votes: this.votes
    });

    this.question = ' ', 
    this.description = ' ',
    this.votes = null 
  }
  
 
}

type Question = {
  question: string;
  description: string;
  votes?: number;
  date: Date
}