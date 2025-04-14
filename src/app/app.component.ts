import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MheaderComponent } from "./components/mheader/mheader.component";
import { NavbarEventsComponent } from "./components/navbar-events/navbar-events.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scheduler';
}
