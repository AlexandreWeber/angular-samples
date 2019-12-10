import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PoModule, PoI18nConfig, PoI18nModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { generalPt } from './shared/literals/i18n/general-pt';
import { generalEn } from './shared/literals/i18n/general-en';
import { generalEs } from './shared/literals/i18n/general-es';
import { departmentPt } from './shared/literals/i18n/department-pt';
import { departmentEn } from './shared/literals/i18n/department-en';
import { departmentEs } from './shared/literals/i18n/department-es';

import { PoPageBlockedUserModule } from '@portinari/portinari-templates';

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
    department: {
      'pt-BR': departmentPt,
      'en-US': departmentEn,
      'es': departmentEs
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
    PoI18nModule.config(i18nConfig),
    PoPageBlockedUserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
