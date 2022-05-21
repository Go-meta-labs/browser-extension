import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TabComponent } from './components/tab/tab.component';
import { TxnCardComponent } from './components/txn-card/txn-card.component';


@NgModule({
  declarations: [
    TabComponent,
    TxnCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TabComponent,
    TxnCardComponent
  ]
})
export class SharedModule { }
