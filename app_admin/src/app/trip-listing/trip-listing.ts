import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TripCard } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripData } from '../services/trip-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true, 
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css',
  providers: [TripData]
})



export class TripListing implements OnInit {
  trips = signal<Trip[]>([]);
  message = signal('');

  constructor(private tripDataService: TripData, private router: Router) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
  
  private getStuff(): void {
    this.tripDataService.getTrips().subscribe ({

      next: (value: any) => {

        console.log('Before:', this.trips());
        this.trips.set(value);
        console.log('After:', this.trips());

        if (value.length > 0) {
          this.message.set(`There are ${value.length} trips available.`);
        } else {
          this.message.set('There were no trips retrieved from the database');
        }

        console.log('Setting trips to:', value);



        console.log(this.message());
      },

      error: (error: any) => {

        console.log('Error: ' + error);

      }
    })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
