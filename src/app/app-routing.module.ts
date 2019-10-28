import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'carslist',
    children: [
      {
        path: '',
        loadChildren:
          './carslist/carslist.module#CarslistPageModule'
      },
      {
        path: ':carname',
        loadChildren: './car/car.module#CarPageModule'
      }
    ]
  },
  { path: 'addcar',
   loadChildren: './addcar/addcar.module#AddcarPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
