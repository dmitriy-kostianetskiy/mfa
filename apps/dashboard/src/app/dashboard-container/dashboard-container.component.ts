import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WidgetType } from '../model';
import { DashboardService } from './services';

@Component({
  selector: 'mfe-dashboard-container',
  templateUrl: 'dashboard-container.component.html',
  styleUrls: ['dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardContainerComponent {
  readonly widgetTypes: readonly WidgetType[] = ['text', 'image'];
  readonly widgets$ = this.dashboardService.widgets$;

  constructor(private readonly dashboardService: DashboardService) {}

  onCreateWidget(widgetType: WidgetType): void {
    this.dashboardService.createWidget(widgetType);
  }
}
