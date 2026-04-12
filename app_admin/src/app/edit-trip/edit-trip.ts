import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css',
})
export class EditTrip implements OnInit {
  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message : string = '';

  constructor (private formBuilder: FormBuilder, private router: Router, private tripData: TripData) {}
  
  ngOnInit(): void {

    //Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    if(!tripCode) {
      alert("Somethings wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log('EditTrip::ngOnInit');
    console.log('tripCode:' + tripCode);

    this.editForm = this.formBuilder.group({
      _id:[],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.tripData.getTrip(tripCode).subscribe({
      next:(value: any) => {
        this.trip = value;
        //Populate our record into the form
        this.editForm.patchValue(value[0]);
        if(!value) {
          this.message = 'No Trip Retrieved!';
        } else {
          this.message = 'Trip: ' + tripCode + ' retrieved';
        }

        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    });
  }

  public onSubmit() {
    this.submitted = true;

    if(this.editForm.valid) {
      this.tripData.updateTrip(this.editForm.value).subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
      });
    }
  }

  get code() { return this.editForm.get('code'); }
  get name() { return this.editForm.get('name'); }
  get length() { return this.editForm.get('length'); }
  get start() { return this.editForm.get('start'); }
  get resort() { return this.editForm.get('resort'); }
  get perPerson() { return this.editForm.get('perPerson'); }
  get image() { return this.editForm.get('image'); }
  get description() { return this.editForm.get('description'); }
}
