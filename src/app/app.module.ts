import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './layout/home/home.module';
import { FooterComponent } from './footer/footer.component';
import { LayoutModule } from './layout/layout.module';
import { ClickedOutsideDirective } from './_directive/clickoutside.directive';
import { AnimateLeftDirective } from './_directive/animate-left.directive';
import { AnimateRightDirective } from './_directive/animate-right.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClickedOutsideDirective,
    AnimateLeftDirective,
    AnimateRightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
