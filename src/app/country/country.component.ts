import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  constructor(private countryService: CountryService, private router: Router) {}
  item: any;
  ngOnInit(): void {
    this.item = JSON.parse(localStorage.getItem('currentCountry')!);
  }

  goBack() {
    this.router.navigate(['']);
  }
}
