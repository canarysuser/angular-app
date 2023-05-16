import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'First Angular Application';
  location = "Bengaluru, India";
  x = 200; 
  y = 400; 

  getDate() { 
    return new Date(2020, 0,1).toDateString();
  }
  btnClick() { 
    //alert( ' Hello. Button Clicked.');
    this.x +=100;
  }
}
