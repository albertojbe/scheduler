import { Routes } from '@angular/router';
import { ListEventsComponent } from './components/list-events/list-events.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: "home", component: HomeComponent, title: "Home", children: [
    {path: "eventos-futuros", component: ListEventsComponent},
    {path: "eventos-passados", component: ListEventsComponent}
  ]},
  {path: "**", redirectTo: "/home/eventos-futuros"}
];
