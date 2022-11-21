import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}
  countryName = new Subject();

  getCountry() {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getSingalCountry(country: string) {
    return this.http.get('https://restcountries.com/v3.1/name/' + country);
  }

  nameEmiter(value: string) {
    this.countryName.next(value);
  }

  setItemToLocalStorage(theItem: any) {
    localStorage.setItem('currentCountry', JSON.stringify(theItem));
  }

  getRegions(region: string) {
    return this.http.get('https://restcountries.com/v3.1/region/' + region);
  }
}
