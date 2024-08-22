import { Component, OnInit } from '@angular/core';

// Validation form
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit {

  // variables
  minDate = new Date();
  dateCtrl!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.dateCtrl = new FormControl('', [Validators.required]);
  }

}
