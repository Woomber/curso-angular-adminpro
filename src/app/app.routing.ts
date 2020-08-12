import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainRoutingModule } from './pages/main.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MainRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
