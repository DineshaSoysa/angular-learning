import { Injectable } from '@angular/core';
import { RoomList } from './rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { 
    console.log('service initialized');
  }

  rooms_list: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room Type 1',
      roomAmenities: 'Air Conditioner , Free Wi- Fi , TV, Kitchen, Bathroom',
      roomPrice: '500',
      checkinTime: new Date('24-Jan-2024'),
      checkoutTime: new Date('25-Jan-2024'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room Type 2',
      roomAmenities: 'Air Conditioner , Free Wi- Fi , TV, Kitchen, Bathroom',
      roomPrice: '1000',
      checkinTime: new Date('24-Jan-2024'),
      checkoutTime: new Date('25-Jan-2024'),
    },
    {
      roomNumber: 3,
      roomType: 'Deluxe Room Type 3',
      roomAmenities: 'Air Conditioner , Free Wi- Fi , TV, Kitchen, Bathroom',
      roomPrice: '1500',
      checkinTime: new Date('24-Jan-2024'),
      checkoutTime: new Date('25-Jan-2024'),
    },
  ];

  

  getRoom(){
    return this.rooms_list;
  }
}
