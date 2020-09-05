import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainComponent } from '../pages/main.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component'
import { ProgressComponent } from "../pages/progress/progress.component";
import { Grafica1Component } from "../pages/grafica1/grafica1.component";
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      { path: 'progress', component: ProgressComponent,  data: { title: 'Progress' } },
      { path: 'charts/1', component: Grafica1Component,  data: { title: 'Gráfica 1' } },
      { path: 'account/settings', component: AccountSettingsComponent, data: { title: 'Configuración' }  },
      { path: 'promesas', component: PromesasComponent,  data: { title: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent,  data: { title: 'RxJS' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
