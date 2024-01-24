import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelname = 'Hilton Hotel'
  numberOfRooms = 20;
  hideRooms = false;

  rooms : Room = {
    totalRooms : 20,
    availableRooms : 10,
    bookedRooms : 5,

  };

  constructor() { }

  ngOnInit(): void {
  }

  
  //event binding
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
