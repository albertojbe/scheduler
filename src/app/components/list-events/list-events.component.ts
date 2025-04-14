import { Component, OnInit } from '@angular/core';
import { ReservaDto } from '../../models/DTOs/reserva.dto';
import { ReservasServiceService } from '../../services/reservas-service.service';
import { reservaMapper } from '../../mappers/reserva.mapper';
import { CardEventComponent } from "../card-event/card-event.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-events',
  imports: [CardEventComponent],
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent implements OnInit {
  reservas: ReservaDto[] = []

    constructor (private reservasApi: ReservasServiceService, private activeRoute: ActivatedRoute) {
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
      this.activeRoute.url.subscribe((res) => {
        if(res[0].path === "eventos-futuros") {
          this.reservasApi.getReservasFuturas().subscribe((response) => {
            for (let reserva of response) {
              this.reservas.push(reservaMapper(reserva));
            }
          });
        }
        else {
          this.reservasApi.getReservasPassadas().subscribe((response) => {
            for (let reserva of response) {
              this.reservas.push(reservaMapper(reserva));
            }
          });
        }
      });


    }
  }