import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid!: any;
  myform!: any;
  ngOnInit(): void {
    this.myform = new FormGroup({
      'phone': new FormControl(''),
      'selectbox': new FormControl(''),
      'email': new FormControl('')
    })
    

  }


  onSubmit() {
    localStorage.setItem("formdata",JSON.stringify(this.myform.value));
    alert('Mesajınız göndərildi');
    this.myform.reset()
  
  }

  

}
