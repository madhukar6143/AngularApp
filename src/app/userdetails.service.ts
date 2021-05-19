import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor( private httpObj:HttpClient) { }

  getUserData():Observable<any>{
   return this.httpObj.get<any>("https://jsonplaceholder.typicode.com/users")

  }
}
