import { Component } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <hr/>
      <h1>NG - Learn</h1>
      <hr/>

      <app-counter-box></app-counter-box>

      <hr/>

      <button (click)="changeMessage('good morning')" class="btn btn-primary">GM</button>&nbsp;
      <button (click)="changeMessage('good noon')" class="btn btn-primary">GN</button>&nbsp;
      <button (click)="changeMessage('good evening')" class="btn btn-primary">GE</button>&nbsp;
      <hr/>
      <app-greeting [message]="message"></app-greeting>
      

    <div>
  `,
})
export class AppComponent {

  message: string = "greetings";

  changeMessage(message) {
    this.message = message;
  }


}
