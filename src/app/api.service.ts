import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

private    categoryURL= "https://69e0b89829c070e6597be9ff.mockapi.io/category";

  constructor(private http: HttpClient) {}

 getData() : Observable<any>
  {
    return this.http.get(this.categoryURL);
  }

  postData(data:any) : Observable<any>
  {
    return this.http.post(this.categoryURL , data);
  }
  putData(id:any, data:any) : Observable<any>
  {
    return this.http.put(this.categoryURL + "/"+id , data);
  }
  deleteData(id:any) : Observable<any>
  {
    return this.http.delete(this.categoryURL+"/"+id);
  }





}
