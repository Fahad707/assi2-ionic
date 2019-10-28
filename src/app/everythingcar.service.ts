import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EverythingcarService {
  cars = [
    { model: '2004', name: 'Honda Civic' },
    { model: '2009', name: 'Honda City' },
    { model: '2018', name: 'Honda Accord' },
    { model: '2019', name: 'Suzuki Alto' },
    { model: '2017', name: 'Toyota Corolla'},
    { model: '2010', name: 'Toyota Camry' },
    { model: '2019', name: 'Toyota Revo' },
     ];

  constructor() {}

  returnCarsList() {
    return this.cars;
  }

  deleteCar(model) {
   this.cars = this.cars.filter(e => {
      return e.model !== model;
    });
  }
}
