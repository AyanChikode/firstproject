import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData:any;

  constructor(private auth:AuthService, private router:Router){

  }
ngOnInit(): void {

  // agar already login hai
  if(localStorage.getItem('Email'))
  {
      let email = localStorage.getItem('Email');

      if(email == 'admin')
      {
        this.router.navigate(['/admin']);
      }

  }

  this.formData = new FormGroup({
    email : new FormControl(),
    password : new FormControl()
  });

}

  btnLoginClick(data:any)
  {
    let result = this.auth.login(data);
      console.log(result);

      if(result.status == 'success')
      {
          if(result.data?.usertype=='admin')
          {
              this.router.navigate(['/admin']);
          }

      }
      else
      {
        this.router.navigate(['/']);
      }

  }

}
