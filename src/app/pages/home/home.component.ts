import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarEventsComponent } from "../../components/navbar-events/navbar-events.component";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NavbarEventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
