import { Component } from '@angular/core';
import { MheaderComponent } from "../../components/mheader/mheader.component";
import { NavbarEventsComponent } from "../../components/navbar-events/navbar-events.component";
import { CardEventComponent } from "../../components/card-event/card-event.component";

@Component({
  selector: 'app-home',
  imports: [MheaderComponent, NavbarEventsComponent, CardEventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
