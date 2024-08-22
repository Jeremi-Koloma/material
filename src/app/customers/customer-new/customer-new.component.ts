import { Component, OnInit } from '@angular/core';

// Validation form
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  // FormControl
  emailFormControl!: FormControl;
  matcher = new ErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

}
