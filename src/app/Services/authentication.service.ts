import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development'
import { Register } from '../Models/Register.Interfaces';
import { Observable } from 'rxjs';
import { JwtAuth } from '../Models/Auth.Interfaces';
import { Login } from '../Models/Login.Interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private registerUrl: string = "AuthManagement/Register";
  private loginUrl:string = "AuthManagement/Login";
  private weatherUrl:string = "WeatherForecast";

  constructor(private http:HttpClient) { }

  public register(user:Register):Observable<JwtAuth>{
      return this.http.post<JwtAuth>(`${environment.apiUrl}${this.registerUrl}`,user)
  }

  public login(user:Login):Observable<JwtAuth>{
    return this.http.post<JwtAuth>(`${environment.apiUrl}${this.loginUrl}`,user)
  }

  public getWeather():Observable<string>{
    return this.http.get<string>(`${environment.apiUrl}${this.weatherUrl}`)
  }



}
