import { Component } from '@angular/core';
import { NavbarEventsComponent } from "../../components/navbar-events/navbar-events.component";
import { CardEventComponent } from "../../components/card-event/card-event.component";
import { MOCK_EVENTS } from '../../../data/mock_events';

@Component({
  selector: 'app-home',
  imports: [NavbarEventsComponent, CardEventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  mocks = MOCK_EVENTS
}
