import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmbeddedDashboardComponent } from './components/embedded-dashboard/embedded-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    EmbeddedDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
