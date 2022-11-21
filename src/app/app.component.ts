import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private countryService: CountryService) {}
  countryName: any;
  ngOnInit(): void {
    this.countryService.countryName.subscribe((data) => {
      this.countryName = data;
    });
  }

  title = 'REST-Countries-API';
  darkMode = false;
}
