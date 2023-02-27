import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RouterModule } from '@angular/router';

const homeRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild([
	{
		path: '',
		component: VehicleComponent,
	},
]);

@NgModule({
  declarations: [
    VehicleComponent
  ],
  imports: [
    CommonModule,
    homeRouting
  ]
})
export class VehicleModule { }
