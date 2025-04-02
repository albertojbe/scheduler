import { Component, } from '@angular/core';
import { statusOption } from '../../models/statusOption';

@Component({
  selector: 'app-navbar-events',
  imports: [],
  templateUrl: './navbar-events.component.html',
  styleUrl: './navbar-events.component.css'
})
export class NavbarEventsComponent {

  options: statusOption[] = [
    {name: "Upcoming", url: "#"},
    {name: "Past", url: "#"}
  ]
}
