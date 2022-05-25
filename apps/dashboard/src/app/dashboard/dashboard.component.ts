import {
  Component,
  ChangeDetectionStrategy,
  ViewContainerRef,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { WidgetComponentType, WidgetType } from '../model';
import { WidgetLookupService } from '../services/widget-lookup.service';

@Component({
  selector: 'mfe-dashboard',
  template: `<button
      *ngFor="let widgetType of widgetTypes; trackBy: trackWidgetType"
      (click)="onCreateWidget(widgetType)"
    >
      Create {{ widgetType }} Widget
    </button>
    <div class="widgets-container">
      <div
        class="widgets-wrapper"
        *ngFor="
          let widgetComponent of widgetComponents;
          trackBy: trackWidgetComponent
        "
      >
        <ng-container *ngComponentOutlet="widgetComponent"></ng-container>
      </div>
    </div>`,
  styles: [
    `
      .widgets-container {
        display: flex;
        flex-wrap: wrap;
      }

      .widgets-wrapper {
        margin: 2px;
        min-height: 100px;
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @ViewChild('container', { read: ViewContainerRef })
  public readonly container!: ViewContainerRef;

  public readonly widgetTypes = this.widgetLookup.widgetTypes;
  public readonly widgetComponents: WidgetComponentType[] = [];

  private counter = 0;

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
