import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { FakeDatatype } from './models/outsideData.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private obj:HttpClient) { }
   
  
  getDataFromOutside():Observable<FakeDatatype[]>{
    return this.obj.get<FakeDatatype[]>('https://jsonplaceholder.typicode.com/posts')
  }
   
  }

