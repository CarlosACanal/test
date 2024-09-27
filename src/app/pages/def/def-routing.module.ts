import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefComponent } from './def.component';

const routes: Routes = [
  {path: '', component: DefComponent, 
    children: [
      
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefRoutingModule { }
