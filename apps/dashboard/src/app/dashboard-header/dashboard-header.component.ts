import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WidgetType } from '../model';

@Component({
  selector: 'mfe-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  @Input() widgetTypes: readonly WidgetType[] = [];

  @Output() readonly createWidget = new EventEmitter<WidgetType>();

  onCreateWidget(widgetType: WidgetType): void {
    this.createWidget.emit(widgetType);
  }

  trackWidgetType(_: number, widgetType: WidgetType): WidgetType {
    return widgetType;
  }
}
