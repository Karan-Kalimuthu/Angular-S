import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AdminOnlyGuard } from './admin-only.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminDashComponent,
    canActivate: [AdminOnlyGuard]
  },
  {
    path: 'dashboard',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
