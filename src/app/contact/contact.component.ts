import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  ngOnInit(): void {
    
  }
  
  // contact.component.ts
submitForm(form:any){
  if(form.valid){
    console.log(form.value);
    alert("Message Sent Successfully!");
    form.reset();
  }
}

}
