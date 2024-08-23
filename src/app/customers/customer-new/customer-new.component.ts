import { Component, OnInit } from '@angular/core';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

// Validation form
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

// Material
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
})
export class CustomerNewComponent implements OnInit {

  // FormControl
  emailFormControl!: FormControl;
  matcher = new ErrorStateMatcher();

  constructor(public dialog: MatDialog, public sanckBar: MatSnackBar) { }

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

  // L'ouverure Snackbar
  openUndoSnackBar() {
    const snackBarRef = this.sanckBar.open('Customer Saved', 'UNDO', {
      horizontalPosition: 'end'
    });

    snackBarRef.onAction().subscribe(() => {
      alert('Undo that save !');
    });
  }

}
