import { Component } from '@angular/core';
import { ListEventsComponent } from "../../components/list-events/list-events.component";

@Component({
  selector: 'app-home',
  imports: [ListEventsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
}
