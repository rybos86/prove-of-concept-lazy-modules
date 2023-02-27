import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vehicle',
    pathMatch: "full"
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicle/vehicle.module').then((m) => m.VehicleModule),
  },
  {
    path: 'investment',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Module',
    })
      .then(m => m.InvestmentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
