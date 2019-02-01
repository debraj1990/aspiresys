import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { myValidator } from '../validators'
import { log } from 'util';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  isOpen: boolean = false;
  reviewForm: FormGroup;

  errors: any = {};

  @Output() onNewReview = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // this.reviewForm = new FormGroup({
    //   stars: new FormControl(5),
    //   author: new FormControl('nag@email.com'),
    //   body: new FormControl('')
    // });

    // or

    this.reviewForm = this.fb.group({
      stars: 5,
      author: ['nag@email.com', [Validators.required, Validators.email]],
      body: ['', [Validators.required, myValidator]]
    });

    let authorControl = this.reviewForm.get('author');

    authorControl
      .valueChanges   // observable-stream
      .subscribe(value => {
        //console.log(e)
      })

    authorControl
      .statusChanges   // observable-stream
      .subscribe(status => {
        if (status === "INVALID") {
          if (authorControl.errors.required)
            this.errors['author'] = "Email is Required"
          if (authorControl.errors.email)
            this.errors['author'] = "Invalid Email"
        } else {
          this.errors['author'] = '';
        }
      })

    let bodyControl = this.reviewForm.get('body');
    bodyControl.statusChanges
      .subscribe(status => {
        if (status === "INVALID") {
          if (bodyControl.errors.bad) {
            this.errors['body'] = "No bad words";
          }
        } else this.errors['body'] = "";
      })

  }

  toggleForm() {
    this.isOpen = !this.isOpen;
  }

  handleForm(event) {

    if (this.reviewForm.valid) {
      let formModel = this.reviewForm.value;
      this.onNewReview.emit(formModel)
      this.reviewForm.reset({
        stars: 5,
        author: 'nag@email.com',
        body: ''
      });
      this.toggleForm();
    }

  }

}
