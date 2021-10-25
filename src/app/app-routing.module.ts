import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeyResultsComponent } from './components/key-results/key-results.component';
const routes: Routes = [
  { path: '', redirectTo: 'key-results', pathMatch: 'full' },
  { path: 'key-results', component: KeyResultsComponent },
  // { path: 'tutorials', component: TutorialsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
