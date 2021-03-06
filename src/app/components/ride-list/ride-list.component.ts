import { Component, OnInit } from '@angular/core';
import {Ride} from "../../models/ride";
import {RideService} from "../../services/ride-service/ride.service";

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {

  private rides: Ride[];

  constructor(private rideService: RideService) { }

  ngOnInit() {
    this.rideService.getRides()
      .then(rides => this.rides = rides)
      .catch(err => console.log(err));
  }

}
