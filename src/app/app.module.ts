import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule } from "@angular/common/http";

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';

import { HttpInterceptors } from './shared/_interceptors/http.interceptor';
import { ErrorHandlerService } from './shared/_helpers/error-handler.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { WildcardComponent } from './shared/components/wildcard/wildcard.component';
import { ConfirmationModalComponent } from './shared/components/confirmation-modal/confirmation-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WildcardComponent,
    ConfirmationModalComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
  ],
  providers: [
     { provide: ErrorHandler, useClass: ErrorHandlerService },
     { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptors, multi: true },
     provideAnimationsAsync(),
  ],
  exports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
