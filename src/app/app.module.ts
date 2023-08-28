import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { NgChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { BarComponent } from './bar/bar.component';
import { DealerpieComponent } from './dealerpie/dealerpie.component';
import { StatepieComponent } from './statepie/statepie.component';

import { DemoserviceService } from './demoservice.service';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    BarComponent,
    DealerpieComponent,
    StatepieComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    NgChartsModule
  ],
  providers: [
    DemoserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
