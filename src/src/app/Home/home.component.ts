import { Component } from '@angular/core';
// decorator --->function --->@
// provide class data its needed
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'home';
}
