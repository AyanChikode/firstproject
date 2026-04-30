import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(data:any)
  {
      if(data.email === "admin" && data.password === "123")
      {
        localStorage.setItem('Name', 'Admin');
        localStorage.setItem('Email', 'admin');
        return {status:'success', data:{name:'Admin', usertype:'admin'}};
      }

      else{
        return {status:'error'};
      }
  }
}
