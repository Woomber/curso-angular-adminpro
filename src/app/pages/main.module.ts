import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";



import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from "../components/components.module";

import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
  ],
  exports: [
    MainComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class MainModule { }
