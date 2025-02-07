import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    importProvidersFrom(BrowserModule, AppRoutingModule, BrowserAnimationsModule),
    provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()
  ]
})
  .catch(err => console.error(err));

