import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { WidgetComponentType, WidgetType } from '../model';
import { WidgetLookupService } from '../services/widget-lookup.service';

@Component({
  selector: 'mfe-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  public readonly widgetTypes = this.widgetLookup.widgetTypes;
  public readonly widgetComponents: WidgetComponentType[] = [];

  constructor(
    private readonly widgetLookup: WidgetLookupService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  onCreateWidget(widgetType: WidgetType): void {
    this.widgetLookup.loadWidget(widgetType).subscribe({
      next: (component) => {
        this.widgetComponents.push(component);

        this.changeDetectorRef.markForCheck();
      },
    });
  }

  trackWidgetComponent(
    _: number,
    widgetComponent: WidgetComponentType
  ): WidgetComponentType {
    return widgetComponent;
  }

  trackWidgetType(_: number, widgetType: WidgetType): WidgetType {
    return widgetType;
  }
}
