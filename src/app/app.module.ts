import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionCardComponent } from './question-card/question-card.component';
import { AddQuestionComponent } from './add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionCardComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
