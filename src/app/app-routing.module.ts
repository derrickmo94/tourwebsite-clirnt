import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppSettingResolver } from './front/resolver/data-resolver';

const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule),

  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
