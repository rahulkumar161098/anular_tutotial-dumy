import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { ServiceService } from "../service.service"


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private api: ServiceService) { }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      full_name: new FormControl(''),
      email: new FormControl(''),
      pass: new FormControl('')
    })


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
          alert('Something wendt wrong!')
        }
            
      })
    }
    
  }

}
