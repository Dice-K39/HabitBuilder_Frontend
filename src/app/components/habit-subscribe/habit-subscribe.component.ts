import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIConnecterService } from 'src/app/services/apiconnecter.service';
import { HabitService } from 'src/app/services/habit.service';

@Component({
  selector: 'app-habit-subscribe',
  templateUrl: './habit-subscribe.component.html',
  styleUrls: ['./habit-subscribe.component.css']
})
export class HabitSubscribeComponent implements OnInit {

  //habitId is returned from HTML Template
  habitId: number = 0;
  //userId needs to come from somewhere
  appUser: any;

  constructor(private habitService: HabitService) { }

  ngOnInit(): void {
  }
  /*This Method needs to associate a user with a habitId(which is received from this HTML template) */
  subscribe(){ 
    
  }

}
