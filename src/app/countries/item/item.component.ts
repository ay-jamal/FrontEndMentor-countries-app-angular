import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CountryService } from 'src/app/country.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: any;

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {}

  passItem(item: any) {
    this.countryService.setItemToLocalStorage(item);

    this.router.navigate(['country']);
  }
}
