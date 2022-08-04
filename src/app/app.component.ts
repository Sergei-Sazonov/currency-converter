import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import { Currency } from './core/types/currency';
import { CurrencyStoreService } from './services/currency-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'converter-test';
  currencies$ = this.currencyStoreService.currencies$.pipe(
    map(curencies => curencies.filter((currency: Currency.ICurrency) => currency.ccy !== Currency.ECurrency.btc))
  );

  constructor(private translateService: TranslateService, public currencyStoreService: CurrencyStoreService) {
    translateService.setDefaultLang('en');
    translateService.use('en');
    this.dispatchUpdate();
  }

  dispatchUpdate() {
    this.currencyStoreService.dispatchGet();
  }
}
