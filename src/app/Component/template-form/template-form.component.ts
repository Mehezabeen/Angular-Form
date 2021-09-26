import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // onRegister(formData:any){
  // console.log(formData);
  // }
  onLogin(formData:any){
  console.log(formData);
  
  }
}
