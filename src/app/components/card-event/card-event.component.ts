import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-card-event',
  imports: [NgClass],
  templateUrl: './card-event.component.html',
  styleUrl: './card-event.component.css'
})
export class CardEventComponent implements OnInit {

  @Input() requester: string = "none";
  @Input() subject: string = "none";
  @Input() room: string = "none";
  @Input() start: string = "00:00";
  @Input() end: string = "00:00"
  @Input() status: string = ""
  colorStatus: Record<string, boolean> = {
    'text-bg-primary': this.status === 'Aguardando',
    'text-bg-sucess': this.status === 'Aprovado',
    'text-bg-alert': this.status === 'Recusado'
  }

  ngOnInit(): void {
    this.colorStatus = {
      'text-bg-primary': this.status === 'Aguardando',
      'text-bg-success': this.status === 'Aprovado',
      'text-bg-danger': this.status === 'Recusado'
    }
  }
}