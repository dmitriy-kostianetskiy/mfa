import { Injectable } from '@angular/core';
import { defer, map, Observable } from 'rxjs';
import {
  ImportedWidgetModule,
  WidgetComponentType,
  WidgetType,
} from '../model';

@Injectable({
  providedIn: 'root',
})
export class WidgetLookupService {
  private readonly widgetsMap: Record<
    WidgetType,
    Observable<ImportedWidgetModule>
  > = {
    ['text']: defer(() => import('text-widget/Component')),
    ['image']: defer(() => import('image-widget/Component')),
  };

  loadWidget(widgetType: WidgetType): Observable<WidgetComponentType> {
    const loaderObservable = this.widgetsMap[widgetType];

    if (!loaderObservable) {
      throw new Error(`Unable to find mfe for ${widgetType}`);
    }

    return loaderObservable.pipe(map(this.takeComponent));
  }

  private takeComponent = (module: ImportedWidgetModule): WidgetComponentType =>
    module.RemoteEntryComponent;
}
