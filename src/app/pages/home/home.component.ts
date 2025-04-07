import { Component, OnInit } from '@angular/core';
import { NavbarEventsComponent } from "../../components/navbar-events/navbar-events.component";
import { CardEventComponent } from "../../components/card-event/card-event.component";
import { MOCK_EVENTS } from '../../../data/mock_events';
import {ReservasServiceService} from '../../services/reservas-service.service'

@Component({
  selector: 'app-home',
  imports: [NavbarEventsComponent, CardEventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  mocks: any = []

  constructor (private reservasApi: ReservasServiceService) {

  }
  ngOnInit(): void {
    this.reservasApi.getReservasFuturas().subscribe(
      {
        next: (response) => this.mocks.push(response)
      }
    );
  }
}
