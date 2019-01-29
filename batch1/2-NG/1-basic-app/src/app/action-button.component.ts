

import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'app-action-button',
    template: `
       <div class="action-button">
            <div class="card card-default">
                <div class="card-body">
                        <button (click)="increment()" [ngClass]="{btn:true,'btn-primary':value>0,'btn-warning':value<0}">{{value}}</button>  
                        &nbsp;&mdash;&nbsp;
                        <span class="badge badge-danger">{{count}}</span>
                </div>
            </div>
       </div>
    `,
    styles: [
        `
        .action-button{
            float:left;
            margin:5px;
            width:180px;
        }

        `
    ]
})
export class ActionButton {
    @Input()
    value: number;
    @Output()
    action: EventEmitter<any> = new EventEmitter()
    count: number = 0;
    increment() {
        this.count++;
        this.action.emit({ value: this.value * this.count,otherValue:'' })
    }
}

