
import { AbstractControl } from '@angular/forms'

let badWords = [
    'shit',
]

export function myValidator(c: AbstractControl): { [key: string]: any } | null {
    let value = c.value;
    if (badWords.includes(value)) {
        return { bad: true }
    }
    else return null;
}