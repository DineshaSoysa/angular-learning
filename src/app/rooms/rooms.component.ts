import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelname = 'Hilton Hotel'
  numberOfRooms = 20;
  hideRooms = false;

  constructor() { }

  ngOnInit(): void {
  }

  //event binding
  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
