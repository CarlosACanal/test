import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { formGuard } from './guards/form.guard';

const routes: Routes = [
  {
    path: 'form', component: FormComponent, canActivate: [formGuard]
  },
  {
    path: 'def', loadChildren: () => import('./pages/def/def.module').then(m => m.DefModule)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
