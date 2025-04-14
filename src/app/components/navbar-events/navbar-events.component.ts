import { Component, } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-events',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-events.component.html',
  styleUrl: './navbar-events.component.css'
})
export class NavbarEventsComponent {

  options = [
    {name: "Upcoming", url: "eventos-futuros"},
    {name: "Past", url: "eventos-passados"}
  ]
}
