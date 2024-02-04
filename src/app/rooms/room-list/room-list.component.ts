import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../rooms.service';
  

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  changeDetection :ChangeDetectionStrategy.OnPush,
 })
export class RoomListComponent implements OnInit , OnChanges , OnDestroy{

  @Input() title : String = ""
  @Input() rooms : RoomList[] =[];

  @Output() selectedRoom = new EventEmitter<RoomList>();
 
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
      if(changes['title']){
        this.title = changes['title'].currentValue.toUpperCase();
      }
  }

  buttonSelect(Sroom : RoomList){
    this.selectedRoom.emit(Sroom);
  }

//ondestroy
  ngOnDestroy() {
      console.log("component destroyed")
  }

}
