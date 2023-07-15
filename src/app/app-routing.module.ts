import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HocRoutingComponent } from './pages/hoc-routing/hoc-routing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hoc-routing', component: HocRoutingComponent },
  // { path: 'nztable', component: NzTabelComponent },
  // { path: 'td', component: TdComponent },
  // { path: 'th', component: ThComponent },
  // { path: 'tr', component: TrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
