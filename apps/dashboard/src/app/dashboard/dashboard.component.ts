import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { WidgetComponentType } from '../model';

@Component({
  selector: 'mfe-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @Input() widgets?: readonly WidgetComponentType[] | null;

  trackWidget(_: number, widget: WidgetComponentType): WidgetComponentType {
    return widget;
  }
}
