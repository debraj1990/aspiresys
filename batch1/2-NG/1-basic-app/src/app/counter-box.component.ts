


import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-counter-box',
    template: `
        <div class="card card-default">
           <div class="card-header">counter box : <span class="badge badge-dark">{{totalCount}}</span></div>
           <div class="card-body">
           <app-action-button *ngFor="let n of numbers" 
                             [value]="n" 
                             (action)="incrementTotalCount($event)">
            </app-action-button>
           </div>
        </div>
    `
})
export class CounterBox {
    totalCount: number = 0;
    numbers: Array<Number> = [1, 10, -100, -200, 300, 400, -500, 600, 700, 800, -900, 1, 10, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    incrementTotalCount(e) {
        this.totalCount += e.value;
    }
}

