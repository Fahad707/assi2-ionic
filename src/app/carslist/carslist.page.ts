import { Component, OnInit } from '@angular/core';

import { EverythingcarService } from '../everythingcar.service';
import { Router } from '@angular/router';
import { CarsListService } from './../cars-list.service';

@Component({
  selector: 'app-carslist',
  templateUrl: './carslist.page.html',
  styleUrls: ['./carslist.page.scss']
})
export class CarslistPage implements OnInit {
  constructor(
    private router: Router,
    private everythingcarService: EverythingcarService // private carsListService: CarsListService
  ) {}

  cars = [];

  ngOnInit() {
    console.log('nothing on init');
  
    // this.cars = this.everythingcarService.returnCarsList();

    // this.cars = this.carsListService.getCars;
    // this.cars = this.carsListService.getAllCars();
  }

  changeUrl(user) {
    const model = user.model.substring(0, 4);
    const url = `carslist/${model}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }

  ionViewDidEnter() {
    console.log('view Enter');
    this.cars = this.everythingcarService.returnCarsList();
  }
}
