import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//userdefined event creation
@Output() onMenubtnClick= new EventEmitter()

  menubtnClicked(){
  //to occuur an userdefined event
  this.onMenubtnClick.emit()
  //to resize screen
  setTimeout(()=>{
    window.dispatchEvent(
      new Event ('resize')
    )},100);
  }
  }

