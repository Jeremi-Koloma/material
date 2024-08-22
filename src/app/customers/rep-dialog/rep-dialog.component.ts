import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rep-dialog',
  templateUrl: './rep-dialog.component.html',
  styleUrls: ['./rep-dialog.component.css']
})
export class RepDialogComponent implements OnInit {

  // variable
  rep!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
