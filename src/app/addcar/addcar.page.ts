import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarsListService } from '../cars-list.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './addcar.page.html',
  styleUrls: ['./addcar.page.scss'],
})
export class AddCarPage implements OnInit {
  name: string;
  dev: string;
  des: string;

  constructor(private carList: CarsListService, private router: Router) { }

  ngOnInit() {
  }

  processFrm() {
    const i = {
      name: this.name,
      company: this.dev,
      summary: this.des
    };
    this.carList.addCar(i);
    this.router.navigate(['/home']);
  }

}
