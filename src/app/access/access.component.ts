import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css']
})
export class AccessComponent implements OnInit {
  
  public loginForm: any;

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(8)
      ])
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }


  /**
   * mara8805@gmail.com
   * briana19
   */
  sendCredentials() : void {
    if (this.loginForm.status == 'VALID') {
      this.httpClient.post(
        'http://www.nivaapi.com/api/login', {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
        }
      ).subscribe((data: any) => {
        console.log(data);
        localStorage.setItem("tokenString", data.tokenString);
        localStorage.setItem("expirationDate", data.expirationDate);
        this.router.navigate(['/product/list']);
      });
    } else {
      alert('Credenciales invalidas!...');
    }
  }
}
