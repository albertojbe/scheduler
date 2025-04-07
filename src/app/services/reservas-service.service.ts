import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Reserva = {
  id: number;
  usuario: string;
  sala: string;
  descricao: string;
  hora_inicio: Date;
  hora_fim: Date;
  status: "Aprovado" | "Recusado" | "Pendente";
}

@Injectable({
  providedIn: 'root'
})

export class ReservasServiceService {
  private baseURL: string;
  private responseData: any;

  constructor(private http: HttpClient) {
    this.baseURL = enviroment.API_URL
  }

  getReservasFuturas(): Observable<Reserva> {
    this.responseData = this.http.get(this.baseURL + "reservas_futuras");
    return this.responseData;
  }
}
