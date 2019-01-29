import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-greeting',
    template: `
        <div class="alert alert-info">
            {{message}}
            <hr/>
            {{now}}
        </div>
    `
})
export class Greeting {
    @Input()
    message: string = 'Nil';
    now: string = new Date().toLocaleTimeString()
}