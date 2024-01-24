import { Component, OnInit } from '@angular/core';
import { Room , RoomList} from './rooms';

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

  rooms_list : RoomList[] = [
    {
      roomNumber : 1,
      roomType : 'Deluxe Room Type 1',
      roomAmenities : 'Air Conditioner , Free Wi- Fi , TV, Kitchen, Bathroom',
      roomPrice : '500',
      checkinTime : new Date('24-Jan-2024'),
      checkoutTime : new Date('25-Jan-2024'),
    },
    {
      roomNumber : 2,
      roomType : 'Deluxe Room Type 2',
      roomAmenities : 'Air Conditioner , Free Wi- Fi , TV, Kitchen, Bathroom',
      roomPrice : '1000',
      checkinTime : new Date('24-Jan-2024'),
      checkoutTime : new Date('25-Jan-2024'),
    },
    {
      roomNumber : 3,
      roomType : 'Deluxe Room Type 3',
      roomAmenities : 'Air Conditioner , Free Wi- Fi , TV, Kitchen, Bathroom',
      roomPrice : '1500',
      checkinTime : new Date('24-Jan-2024'),
      checkoutTime : new Date('25-Jan-2024'),
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  
toggle(){
  this.hideRooms = !this.hideRooms
}

}
