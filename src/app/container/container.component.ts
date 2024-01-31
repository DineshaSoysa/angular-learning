import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit , AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }

  //call emloyee component 
  @ContentChild(EmployeeComponent) employee! : EmployeeComponent;

  //Assign value to the field of employee component
  ngAfterContentInit(){
      this.employee.empName = "My Employee 1"
  }

}
