import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppListComponent } from './app-list/app-list.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppListComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
