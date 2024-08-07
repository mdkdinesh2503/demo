import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HttpClientModule],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private route: Router) {}

  submitList(usr: any, pss: any) {
    this.authService.login(usr, pss).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        alert('Login successful!');
      },
      (error) => {
        alert('Login failed!');
      }
    );
  }

  ngOnInit() {}

  fieldTextType: boolean = false;

  showPass() {
    this.fieldTextType = !this.fieldTextType;
  }

  openForgotPass() {}
}
