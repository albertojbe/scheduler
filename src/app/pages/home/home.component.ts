import { Component, OnInit } from '@angular/core';
import { ReservaDto } from '../../models/DTOs/reserva.dto';
import { extractDate, extractHours } from '../../utils/data.util';
import { CardEventComponent } from "../../components/card-event/card-event.component";
import { NavbarEventsComponent } from "../../components/navbar-events/navbar-events.component";
import { ReservasServiceService } from '../../services/reservas-service.service';
import { reservaMapper } from '../../mappers/reserva.mapper';

@Component({
  selector: 'app-home',
  imports: [NavbarEventsComponent, CardEventComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  reservas: ReservaDto[] = []

  constructor (private reservasApi: ReservasServiceService) {
  }

  private agruparPorData(reservas: ReservaDto[]): Record<string, ReservaDto[]> {
    return reservas.reduce((reservaPorData, reserva) => {
      if (!reservaPorData[reserva.date]) {
        reservaPorData[reserva.date] = [];
        console.log(reserva)
      }
      reservaPorData[reserva.date].push(reserva);
      return reservaPorData
    }, {} as Record<string, ReservaDto[]>);
  } 
  
  ngOnInit(): void {
    this.reservasApi.getReservasFuturas().subscribe((response) => {
      for (let reserva of response) {
        this.reservas.push(reservaMapper(reserva));
      }
      console.log(this.agruparPorData(this.reservas));
    });
  }

}
