import { Component } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
 
  questions: Question[] = [
      {
        question: 'Lorem Ipsum',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, sequi?',
        votes: 0,
        date: new Date()

      }
  ]

  updateList(question: Question ){
    this.questions.push(question);
  }

  getBadVotes(idx){
    return this.questions[idx].votes <= -5 ? true : false 
 }

 sortBy() {
    this.questions.sort((a, b) =>{
      return b.votes - a.votes
    });
  }

 
}

type Question = {
    question: string;
    description: string;
    votes?: number;
    date: Date
}