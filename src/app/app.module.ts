import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlFormComponent } from './html-form/html-form.component';
import { JsFormComponent } from './js-form/js-form.component';
import { NgModelFormComponent } from './ng-model-form/ng-model-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HtmlFormComponent,
    JsFormComponent,
    NgModelFormComponent,
    ReactiveFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
