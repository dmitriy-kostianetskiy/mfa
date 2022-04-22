import {
  Component,
  ChangeDetectionStrategy,
  ViewContainerRef,
  ViewChild,
  Type,
  ChangeDetectorRef,
} from '@angular/core';
import { WidgetLookupService, WidgetType } from '../widget-lookup.service';

interface Widget {
  component: Type<unknown>;
  id: number;
}

@Component({
  selector: 'mfe-dashboard',
  template: `<p>dashboard works!</p>
    <button
      *ngFor="let widgetType of widgetTypes"
      (click)="onCreateWidget(widgetType)"
    >
      Create {{ widgetType }} Widget
    </button>
    <div class="widgets-container">
      <div
        class="widgets-wrapper"
        *ngFor="let widget of widgets; trackBy: trackWidget"
      >
        <ng-container *ngComponentOutlet="widget.component"></ng-container>
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
  public readonly widgets: Widget[] = [];

  private counter = 0;

  constructor(
    private readonly widgetLookup: WidgetLookupService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  onCreateWidget(widgetType: WidgetType): void {
    this.widgetLookup.loadWidget(widgetType).subscribe({
      next: (component) => {
        this.widgets.push({
          component,
          id: this.counter++,
        });

        this.changeDetectorRef.markForCheck();
      },
    });
  }

  trackWidget(_: number, widget: Widget): number {
    return widget.id;
  }
}
