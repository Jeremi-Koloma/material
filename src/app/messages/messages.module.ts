import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MessagesListComponent }
]

@NgModule({
  declarations: [
    MessagesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
