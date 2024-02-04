import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  //create more than one instance of a service
  providers : [RoomsService]
})
export class EmployeeComponent implements OnInit {

  empName! : string;

  //@Self check if service registered within the compnent in providers array
  constructor(@Self() private roomservice : RoomsService) { }

  ngOnInit(): void {
  }
  

}
