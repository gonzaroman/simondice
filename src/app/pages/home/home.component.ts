import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsernameService } from '../../services/username.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private router = inject(Router);
  public userNameService = inject(UsernameService);

  playerName: string = this.userNameService.getNamePlayer();

  showButton: boolean = false;

  ngOnInit(): void {
    this.playerName = this.userNameService.getNamePlayer();
    this.checkPlayerName(); // <-- activa el botón si ya hay nombre
  }

  checkPlayerName() {
    this.showButton = this.playerName !== '';
  }

  goUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  userForm = new FormGroup({
    name: new FormControl(''),
  });

  submitForm() {
    //  console.log('Valor del formulario:', this.userForm.value.name);
    const nameSubmit = this.userForm.value.name ?? null;
    this.userNameService.saveNamePlayer(nameSubmit);
    this.playerName = this.userNameService.getNamePlayer();
    this.checkPlayerName();
  }
}
