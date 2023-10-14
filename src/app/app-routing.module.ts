import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './init/app.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home-routing.module').then((m) => m.HomeRoutingModule),
  },
  {
    path: 'docs',
    loadChildren: () => import('./components/docs/docs.module').then((m) => m.DocsModule)
  }
  // {
  //   path: 'profile',
  //   loadChildren: () =>
  //     import('./profile/profile-routing.module').then(
  //       (m) => m.ProfileRoutingModule
  //     ),
  //   canActivate: [AuthGuard],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
