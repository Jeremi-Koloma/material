import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomerNewComponent } from './customer-new/customer-new.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Routes for Customers sections
const routes: Routes = [
  { path: '', component: CustomersListComponent },
  { path: 'infos', component: CustomerCardComponent },
  { path: 'new', component: CustomerNewComponent },
]

@NgModule({
  declarations: [
    CustomersListComponent,
    CustomerCardComponent,
    CustomerNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomersRoutingModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CustomersModule { }
