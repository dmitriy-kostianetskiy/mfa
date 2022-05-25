import { NgModule } from '@angular/core';
import { DashboardHeaderModule } from '../dashboard-header';
import { DashboardModule } from '../dashboard';
import { DashboardContainerComponent } from './dashboard-container.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [CommonModule, DashboardModule, DashboardHeaderModule],
  exports: [DashboardContainerComponent],
})
export class DashboardContainerModule {}
