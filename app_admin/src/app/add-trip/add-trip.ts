import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css',
})
export class AddTrip implements OnInit {
  addForm!: FormGroup;
  submitted = false;

  constructor (private formBuilder: FormBuilder, private router: Router, private tripService: TripData) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
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
  }

  public onSubmit() {
    this.submitted = true;
    if(this.addForm.valid){
      this.tripService.addTrip(this.addForm.value).subscribe( {
        next: (data: any) => {
        console.log(data);
        this.router.navigate(['']);
        },
      error: (error: any) => {
        console.log('Error: ' + error);
        }
      });
    }
  }

// get the form short name to access the form fields
//get f() { return this.addForm.controls; }
  get code() { return this.addForm.get('code'); }
  get name() { return this.addForm.get('name'); }
  get length() { return this.addForm.get('length'); }
  get start() { return this.addForm.get('start'); }
  get resort() { return this.addForm.get('resort'); }
  get perPerson() { return this.addForm.get('perPerson'); }
  get image() { return this.addForm.get('image'); }
  get description() { return this.addForm.get('description'); }
}
  

