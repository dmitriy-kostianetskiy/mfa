import { Injectable, Type } from '@angular/core';
import { defer, map, Observable } from 'rxjs';
import { WidgetType } from '../model';

@Injectable({
  providedIn: 'root',
})
export class WidgetLookupService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private readonly widgetsMap: Record<WidgetType, Observable<any>> = {
    ['text']: defer(() => import('text-widget/Component')),
    ['image']: defer(() => import('image-widget/Component')),
  };

  public readonly widgetTypes: WidgetType[] = Object.keys(
    this.widgetsMap
  ) as WidgetType[];

  loadWidget(widgetType: WidgetType): Observable<Type<unknown>> {
    const loaderObservable = this.widgetsMap[widgetType];

    if (!loaderObservable) {
      throw new Error(`Unable to find mfe for ${widgetType}`);
    }

    return loaderObservable.pipe(map((item) => item.RemoteEntryComponent));
  }
}
