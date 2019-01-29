import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Greeting } from './greeting.component';
import { CounterBox } from './counter-box.component';
import { ActionButton } from './action-button.component';

@NgModule({
  declarations: [
    AppComponent,
    Greeting,
    CounterBox,
    ActionButton
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
