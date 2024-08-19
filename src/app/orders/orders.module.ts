import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { Routes } from '@angular/router';

// Material components
import { MatTabsModule } from '@angular/material/tabs';


const routes: Routes = [
  { path: '', component: OrdersListComponent }
]

@NgModule({
  declarations: [
    OrdersListComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    // Material
    MatTabsModule
  ]
})
export class OrdersModule { }
