import {Component, OnInit} from '@angular/core';
import {Car} from "./model/car.model";

@Component({
  selector: 'app-root',
  templateUrl: 'demo.component.html',
  styleUrls: ['demo.component.css']
})
export class DemoComponent implements OnInit {

  cars: Array<Car> = [];

  ngOnInit() {
    this.cars = [new Car(2010, "BMW", "Green"),
      new Car(2008, "Jaguar", "White"),
      new Car(2016, "Honda", "Black")]
  }
}
