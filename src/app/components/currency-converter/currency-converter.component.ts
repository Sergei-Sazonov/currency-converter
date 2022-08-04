import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../core/types/currency';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent {
  @Input() currencies: Currency.ICurrency[] = [];
  @Output() triggerUpdate: EventEmitter<boolean> = new EventEmitter<boolean>();

  public inputForm: FormGroup = new FormGroup({
    currency: new FormControl(Currency.ECurrency.eur),
    value: new FormControl()
  });

  public outputForm = new FormGroup({
    currency: new FormControl(Currency.ECurrency.usd),
    value: new FormControl()
  }); 

  constructor(private currencyService: CurrencyService) {
    const valueInputForm = (this.inputForm.get("value") as FormControl);
    const valueOutputForm = (this.outputForm.get("value") as FormControl);
    const currencyInputForm = (this.inputForm.get("currency") as FormControl);
    const currencyOuputForm = (this.outputForm.get("currency") as FormControl);

    currencyInputForm.valueChanges.subscribe(selectedValue => {
      valueOutputForm.setValue(
        this.currencyService.calculateValue(valueInputForm.value, this.currencies, selectedValue, currencyOuputForm.value),
        { emitEvent: false },
        )
    });

    currencyOuputForm.valueChanges.subscribe(selectedValue => {
      valueInputForm.setValue(
        this.currencyService.calculateValue(valueOutputForm.value, this.currencies, selectedValue, currencyInputForm.value),
        { emitEvent: false },
        )
    });

    valueInputForm.valueChanges.subscribe(value => {
      valueOutputForm.setValue(
        this.currencyService.calculateValue(value, this.currencies, currencyInputForm.value, currencyOuputForm.value),
        { emitEvent: false },
        )
    });

    valueOutputForm.valueChanges.subscribe(value => {
      valueInputForm.setValue(
        this.currencyService.calculateValue(value, this.currencies, currencyOuputForm.value, currencyInputForm.value),
        { emitEvent: false },
        )
    });    
  }
}
