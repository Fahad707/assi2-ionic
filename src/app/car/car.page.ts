import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { EverythingcarService } from './../everythingcar.service';
import { CarsListService } from '../cars-list.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss']
})
export class CarPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private everythingcarService: EverythingcarService,
    private carsListService: CarsListService
  ) {}

  cars = [];

  singleCar;

  ngOnInit() {
    this.cars = this.everythingcarService.returnCarsList();
    // this.cars = this.carsListService.getAllCars();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('carid');

      this.singleCar = this.cars.find(obj => {
        return obj.model.includes(val);
      });
    });
  }
  async deleteCar() {
    console.log('Delete Car', this.singleCar);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleCar.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Remove',
          handler: () => {
            console.log('Confirm Okay');
            this.everythingcarService.deleteCar(this.singleCar.year);
            this.router.navigateByUrl('/cars-list');
          }
        }
      ]
    });

    alert.present();
  }
  
}

// const alert = await this.alertController.create({
//   header: 'Success',
//   // subHeader: 'Subtitle',
//   message: `${this.singleCar.name} has been removed successfully`,
//   buttons: ['OK']
//   // buttons: [
//   //   {
//   //     text: 'Okay',
//   //     handler: () => {
//   //       console.log('Confirm Okay');
//   //       this.router.navigateByUrl('/carslist');
//   //     }
//   //   }
//   // ]
// });

// alert.present();
