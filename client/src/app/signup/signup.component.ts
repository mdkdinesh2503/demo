import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HttpClientModule],
  providers:[AuthService]
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  submitList(usr: any, eml: any) {
    this.authService.signup(usr, eml).subscribe(
      response => {
        alert('Signup successful!');
      },
      error => {
        alert('Signup failed!');
      }
    );
  }

  ngOnInit() {
  }

}
