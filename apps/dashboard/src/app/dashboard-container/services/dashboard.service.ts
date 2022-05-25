import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { WidgetLookupService } from '../../services';
import { WidgetComponentType, WidgetType } from '../../model';

@Injectable()
export class DashboardService {
  private readonly widgetsSubject = new BehaviorSubject<
    readonly WidgetComponentType[]
  >([]);

  readonly widgets$ = this.widgetsSubject.asObservable();

  constructor(private widgetLookup: WidgetLookupService) {}

  createWidget(widgetType: WidgetType): void {
    this.widgetLookup
      .loadWidget(widgetType)
      .pipe(take(1))
      .subscribe({
        next: (component) => {
          this.widgetsSubject.next([...this.widgetsSubject.value, component]);
        },
      });
  }
}
