import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormControlName, Validators, MinLengthValidator } from '@angular/forms';
import { ServiceService } from "../service.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData:any;
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private api: ServiceService) { }

  ngOnInit(): void {
    this.getData();
    this.registerForm= new FormGroup({
      full_name: new FormControl('', [Validators.required, Validators.minLength(5)] ),
      email: new FormControl(''),
      pass: new FormControl('')
    })


  }
  get full_name():any{
    return this.registerForm.controls
  }
  registerUser(){
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      this.api.userRegister(this.registerForm.valid)
      .subscribe({
        next:()=>{
          alert('Register successfully!');
        },
        error:()=>{
          alert('Something went wrong!')
        }      
      })
    }
  }

  getData(){  
    this.api.getdata() 
    .subscribe({
      next:(data)=>{

        this.userData=data;
        // data.setHeader("Access-Control-Allow-Origin", "*");
        console.log('...................',this.userData);
        
      },
      error:()=>{
        console.log('Something went wrong!');
        
      }
    });
  }
}
