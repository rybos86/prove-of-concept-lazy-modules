import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { InvestmentsComponent } from './investments/investments.component';
import { DetailComponent } from './detail/detail.component';

const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild([
	{
		path: '',
		component: InvestmentsComponent,
	},
	{
		path: 'detail',
		component: DetailComponent,
	},
]);

@NgModule({
  declarations: [
    InvestmentsComponent,
    DetailComponent
  ],
  imports: [
    CommonModule, routing
  ],
})
export class InvestmentModule { }
