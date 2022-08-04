import { Component, Input } from '@angular/core';
import { Currency } from '../../core/types/currency';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  @Input() currencies: Currency.ICurrency[] = [];
}
