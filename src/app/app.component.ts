import { AfterViewInit, Component, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello world from inline template</h1>',
  styleUrls: ['./app.component.css']
  // styles : ['h1 {color :red}']
})
export class AppComponent implements AfterViewInit , OnInit {
  title = 'hotel-inventory';

  role = 'Admin';


  //dynamically load the component
  @ViewChild('user' , {read : ViewContainerRef}) vcr! : ViewContainerRef;


  //use optional if service is not registered it is not giving an error, because this is optional
  constructor(@Optional() private loggerService : LoggerService){}

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.ngOnInit()')
    // const dynamicComponent  = this.vcr.createComponent(RoomsComponent)

  }

  ngAfterViewInit(): void {
      const dynamicComponent  = this.vcr.createComponent(RoomsComponent)
      dynamicComponent.instance.numberOfRooms = 45;
  }


 }
