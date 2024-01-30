import { AfterViewInit, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit, DoCheck , AfterViewInit{
  hotelname = 'Hilton Hotel';
  numberOfRooms = 20;
  hideRooms = false;
  mySelection!: RoomList;
  title: String = 'List of Rooms';
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

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

  constructor() {}

  @ViewChild(HeaderComponent , {static : true}) headercomponent!: HeaderComponent;

  ngOnInit(): void {
    this.headercomponent.title = "title from header component"
    // this.title = this.headercomponent.title;
    console.log(this.headercomponent);
  }

  ngDoCheck(): void {
    console.log('inside do check');
  }

  ngAfterViewInit(): void {
      console.log(this.headercomponent);
  }

  //Do check - very costly. try to avoid as much as possible.
  // ngDoCheck(): void {
  //     console.log("Do Check is called")
  // }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Room List';
  }

  selectRoom(room: RoomList) {
    this.mySelection = room;
  }

  addRoom() {
    const newRoom: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room Type 4',
      roomAmenities: 'Air Conditioner , Free Wi- Fi , TV, Kitchen, Bathroom',
      roomPrice: '1500',
      checkinTime: new Date('24-Jan-2024'),
      checkoutTime: new Date('25-Jan-2024'),
    };

    //this is create new instance of array - immutable
    this.rooms_list = [...this.rooms_list, newRoom];
    //this will modify the list - mutable. Not work with change detection
    // this.rooms_list.push(newRoom);
  }
}
