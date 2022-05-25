import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardContainerModule } from './dashboard-container';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DashboardContainerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
