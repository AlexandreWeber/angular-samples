import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PoModule, PoI18nConfig, PoI18nModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { actionPt } from './shared/literals/i18n/action-pt';
import { actionEn } from './shared/literals/i18n/action-en';
import { actionEs } from './shared/literals/i18n/action-es';
import { generalPt } from './shared/literals/i18n/general-pt';
import { generalEn } from './shared/literals/i18n/general-en';
import { generalEs } from './shared/literals/i18n/general-es';

const i18nConfig: PoI18nConfig = {
  default: {
      context: 'general',
      cache: true,
      language: localStorage.getItem('user.language') || navigator.language
  },
  contexts: {
    general: {
      'pt-BR': generalPt,
      'en-US': generalEn,
      'es': generalEs
    },
    action: {
      'pt-BR': actionPt,
      'en-US': actionEn,
      'es': actionEs
    }
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoI18nModule.config(i18nConfig)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
