import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { RouterModule, Routes } from '@angular/router';
import { OrderNewComponent } from './order-new/order-new.component';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material components
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';


const routes: Routes = [
  { path: '', component: OrdersListComponent },
  { path: 'new', component: OrderNewComponent },
]

@NgModule({
  declarations: [
    OrdersListComponent,
    OrderNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    OrdersRoutingModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Material
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatMomentDateModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule 
  ]
})
export class OrdersModule { }
