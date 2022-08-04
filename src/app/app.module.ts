import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { httpLoaderFactory } from './core/factories/translate.factory';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { CurrencyProvider } from './services/currency.provider';
import { CurrencyStoreService } from './services/currency-store.service';
import { CommonModule } from '@angular/common';
import { AppStoreModule } from './store/app-store.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyService } from './services/currency.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyConverterComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    AppStoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
        },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    CurrencyProvider,
    CurrencyStoreService,
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
