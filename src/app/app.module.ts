import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { SharedModule } from './shared/shared.module';
import { AddTokenComponent } from './pages/add-token/add-token.component';
import { SendTokenComponent } from './pages/send-token/send-token.component';
import { RecieveTokenComponent } from './pages/recieve-token/recieve-token.component';
import { RevealRecoveryPhraseComponent } from './pages/reveal-recovery-phrase/reveal-recovery-phrase.component';
import { ImportWalletComponent } from './pages/import-wallet/import-wallet.component';
import { CreateWalletComponent } from './pages/create-wallet/create-wallet.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PortfolioComponent,
    TransactionsComponent,
    AddTokenComponent,
    SendTokenComponent,
    RecieveTokenComponent,
    RevealRecoveryPhraseComponent,
    ImportWalletComponent,
    CreateWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
