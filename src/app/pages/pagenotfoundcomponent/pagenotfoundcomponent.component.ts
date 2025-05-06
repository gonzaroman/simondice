import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagenotfoundcomponent',
  standalone: true,
  imports: [MenuComponent,RouterModule],
  templateUrl: './pagenotfoundcomponent.component.html',
  styleUrl: './pagenotfoundcomponent.component.scss'
})
export class PagenotfoundcomponentComponent {

}
