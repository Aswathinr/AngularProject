import { Component, OnInit } from '@angular/core';

import{ Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from '../user';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  loginUser: User;

  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email:['',Validators.compose([Validators.required, Validators.email])],
        //password:['',Validators.required,Validators.pattern('[^a-zA-Z]+$')]
        //email: ['',Validators.required],
        password: ['',Validators.required]
    });

    
  }
  
  get formControls() {
        return this.loginForm.controls; }
  
   login(){
        console.log(this.loginForm.value);
        //this.isSubmitted = true;
        //console.log(this.loginForm.controls.email.value);
        //console.log(this.loginForm.controls.password.value);
        /*
        if(this.loginForm.invalid){
          return;
        }*/
        
        this.isSubmitted=true;
        if(this.loginForm.invalid){
          alert('User form is  not valid!!')
          return;
          
                //  this.isSubmitted=true;
                  //this.authService.login(this.loginForm.value);
               //  this.router.navigateByUrl('/admin');
               // return;
         
        } else {
          alert('User form is valid!!')
           /*
           this.authService.login(this.loginForm.value).subscribe(
             data=>{
               this.loginUser=data;
               console.log(data);
               console.log(data.email);

               //Role based authentication
               if(data.email !=null){
                 this.isSubmitted=true;
                 this.router.navigateByUrl('/admin');
               }
               else{
                 window.alert("Wrong username or password");
               }
             }
           );
           */  
            this.isSubmitted=true;  
            this.authService.login(this.loginForm.value);
            this.router.navigateByUrl('/admin');
        }
     
  }
        

}
