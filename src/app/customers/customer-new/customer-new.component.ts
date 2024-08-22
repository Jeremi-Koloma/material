import { Component, OnInit } from '@angular/core';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

// Validation form
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

// Material
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  // FormControl
  emailFormControl!: FormControl;
  matcher = new ErrorStateMatcher();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

  // L'Ouverture Dialog
  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '250px',
      data: {}
    });

    // Fermeture du Dialog
    dialogRef.afterClosed().subscribe(result => {
      alert(`User chose ${result}`);
    });
  }

}
