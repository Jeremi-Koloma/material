import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCardComponent } from './customer-card/customer-card.component';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule  } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


// Routes for Customers sections
const routes: Routes = [
  { path: '', component: CustomersListComponent },
  { path: 'infos', component: CustomerCardComponent },
]

@NgModule({
  declarations: [
    CustomersListComponent,
    CustomerCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomersRoutingModule,
    // Material
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class CustomersModule { }
