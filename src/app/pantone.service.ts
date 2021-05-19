import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PantoneService {


  constructor(private myObj:HttpClient) { }

  getDataFromServer():Observable<any>
  {
 return this.myObj.get<any>('https://reqres.in/api/unknown')
  }

}