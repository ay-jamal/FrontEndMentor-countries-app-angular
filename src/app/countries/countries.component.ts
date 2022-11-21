import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  countryList: any;
  toggleRegion = false;
  SercheText: any;
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountry().subscribe((item: any) => {
      this.countryList = item;
    });
  }

  toggle() {
    this.toggleRegion = !this.toggleRegion;
  }

  getRegion(region: string) {
    if (region == 'all') {
      this.countryService
        .getCountry()
        .subscribe((item) => (this.countryList = item));
    } else {
      this.countryService.getRegions(region).subscribe((data) => {
        console.log(data);
        this.countryList = data;
      });
    }
  }
}
