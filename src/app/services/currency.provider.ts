import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Currency } from "src/app/core/types/currency";


@Injectable()
export class CurrencyProvider {
    constructor(private http: HttpClient) {

    }
    getAll(): Observable<Currency.ICurrency[]> {
        return this.http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5') as any;
    }
}