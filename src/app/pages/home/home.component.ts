import { Component, OnInit } from '@angular/core';
import { NavbarEventsComponent } from "../../components/navbar-events/navbar-events.component";
import { CardEventComponent } from "../../components/card-event/card-event.component";
import { MOCK_EVENTS } from '../../../data/mock_events';
import {ReservasServiceService} from '../../services/reservas-service.service'
import { ReservaResponse } from '../../../models/reservas.model';
import { ReservaDto } from '../../../models/DTOs/reserva.dto';
import { extractDate, extractHours } from '../../../utils/data.util';

@Component({
  selector: 'app-home',
  imports: [NavbarEventsComponent, CardEventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  reservas: ReservaDto[] = []

  constructor (private reservasApi: ReservasServiceService) {
  }
  ngOnInit(): void {
    this.reservasApi.getReservasFuturas().subscribe((response) => {
      for (let reserva of response) {
        console.log(typeof reserva.hora_fim)
        this.reservas.push({
          requester: reserva.usuario,
          room: reserva.sala,
          subject: reserva.descricao,
          date: extractDate(new Date(reserva.hora_inicio)),
          start: extractHours(new Date(reserva.hora_inicio)),
          end: extractHours(new Date(reserva.hora_fim)),
          status: reserva.status
        });
      }
      console.log(response)
    });

  }
}
