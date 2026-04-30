import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router:Router){}

btnLogout()
{
   localStorage.clear();   // sab data remove
   this.router.navigate(['/']);
}

}
