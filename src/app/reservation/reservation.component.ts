import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservationForm: FormGroup;
  isSubmitted=false;
 // reservationUser: User;


  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.reservationForm = this.formBuilder.group({
      firstname:['',Validators.required],
      password: ['',Validators.required]
    });
  }

  get formControls() {
    return this.reservationForm.controls; }

   onSubmit(){
        console.log(this.reservationForm.value);
        this.isSubmitted=true;
         if(this.reservationForm.invalid)
        {
                alert('form is  not valid!!')
                return;
         } 
        else {
                alert('form is valid!!')
          this.isSubmitted=true;  
            this.authService.login(this.reservationForm.value);
            this.router.navigateByUrl('/admin');
        }
}
}
