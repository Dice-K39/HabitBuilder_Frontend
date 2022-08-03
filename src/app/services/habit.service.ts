import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habitUrl = 'https://localhost:7267/api';
  userUrl = 'https://localhost:7048/api';
  habits : any = {};

  constructor(private http: HttpClient) { }

  createHabit(model: any){
    return this.http.post(this.habitUrl + '/habits', model);
  }
  
}
