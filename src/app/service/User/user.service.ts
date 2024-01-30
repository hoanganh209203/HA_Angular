import { Injectable , inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User,Login,Register } from '../../type/User';
import { configHeaders } from '../../../config/viewLocal';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://web208-angular-backend.vercel.app/auth'; // khai bao apiUrl
  http = inject(HttpClient); // inject bien http

  constructor() {}
    
  login(data:Login){
    return this.http.post<any>(this.apiUrl+'/login',data)
  }
  register(data:Register){
    return this.http.post<any>(this.apiUrl+'/register',data)
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl)
  }
  getUserDetail(id:string){
    return this.http.get<any>(this.apiUrl+`/${id}`)
  }
  updateUser(data:any,id:string){
    return this.http.patch<any>(this.apiUrl+`/${id}`,data)
  }
  deleteUsers(id:string){
    return this.http.delete<any>(this.apiUrl+`/${id}`)
  }
}
