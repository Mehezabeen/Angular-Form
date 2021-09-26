import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  regForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.regForm=fb.group({
      // uName:[],
      // pwd:[],
      // age:[0],
      // gender:[]

      uName:new FormControl(),        //formControl hold the particular form field data.
      pwd:new FormControl(),
      age:new FormControl(),
      gender:new FormControl()
    })
  }

  ngOnInit(): void {
  }
  onRegisterForm(){
    console.log("Form Data",this.regForm.value);
    
  }
}
