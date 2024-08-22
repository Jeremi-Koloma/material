import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MessageNewComponent } from './message-new/message-new.component';

// FormsModule - ReactiveForm
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


// Routes for messages
const routes: Routes = [
  { path: '', component: MessagesListComponent },
  { path: 'new', component: MessageNewComponent },
]

@NgModule({
  declarations: [
    MessagesListComponent,
    MessageNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MessagesRoutingModule,
    // FormModule and ReactiveForm
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,

  ]
})
export class MessagesModule { }
