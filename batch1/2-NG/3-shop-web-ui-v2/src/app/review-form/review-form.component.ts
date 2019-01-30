import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  isOpen: boolean = true;
  reviewForm: FormGroup;

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
      body: ('')
    });

  }

  toggleForm() {
    this.isOpen = !this.isOpen;
  }

}
