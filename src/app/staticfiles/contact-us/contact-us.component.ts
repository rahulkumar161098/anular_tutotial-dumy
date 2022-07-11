import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  c_form!: FormGroup;
  constructor(private fb: FormBuilder){};

  ngOnInit(): void { 
    this.c_form= this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('',  [Validators.required, Validators.email]),
      msg: new FormControl('', [Validators.required])
    })
  }
  // get f(){
  //   return this.c_form.controls
  // }
  get name(){
    return this.c_form.get('name');
  }
  get email(){
    return this.c_form.get('email');
  }
  get msg(){
    return this.c_form.get('msg');
  }

  onSubmit(){
    console.log(this.c_form);
    console.log(this.c_form.value);
    
  }

}
