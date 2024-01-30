import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://web208-angular-backend.vercel.app/auth/';
  constructor() { }
}
