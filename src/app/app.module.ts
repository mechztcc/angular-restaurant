import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
