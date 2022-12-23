import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSanlloComponent } from './pages/page-sanllo/page-sanllo.component';

const routes: Routes = [
  {
    path: 'sanllo',
    component: PageSanlloComponent,
  },
  {
    path: '',
    redirectTo: 'sanllo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
