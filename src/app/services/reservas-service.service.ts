import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaResponse } from '../models/reservas.model';

@Injectable({
  providedIn: 'root'
})

export class ReservasServiceService {
  private baseURL: string;
  private responseData: any;

  constructor(private http: HttpClient) {
    this.baseURL = enviroment.API_URL
  }

  getReservasFuturas(): Observable<ReservaResponse[]> {
    this.responseData = this.http.get(this.baseURL + "reservas_futuras");
    return this.responseData;
  }

  getReservasPassadas(): Observable<ReservaResponse[]> {
    this.responseData = this.http.get(this.baseURL + "reservas_passadas");
    return this.responseData;
  }
}
