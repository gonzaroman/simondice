import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.scss'
})
export class AboutpageComponent {

}
