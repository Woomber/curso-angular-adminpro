import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from '../pages/main.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { ProgressComponent } from "../pages/progress/progress.component";
import { Grafica1Component } from "../pages/grafica1/grafica1.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent},
      { path: 'charts/1', component: Grafica1Component},
      { path: 'account/settings', component: AccountSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
