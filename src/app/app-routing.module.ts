import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'import-wallet', component: WelcomeComponent },
  { path: 'create-wallet', component: WelcomeComponent },
  { path: 'reveal-recovery-phrase', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'send-token', component: WelcomeComponent },
  { path: 'recieve-token', component: WelcomeComponent },
  { path: 'send-token-result', component: WelcomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'add-token', component: PortfolioComponent },
  { path: 'transaction', component: TransactionsComponent },
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
