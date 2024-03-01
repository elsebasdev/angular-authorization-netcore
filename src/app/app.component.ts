import { Component } from '@angular/core';
import { Login } from './Models/Login.Interfaces';
import { Register } from './Models/Register.Interfaces';
import { JwtAuth } from './Models/Auth.Interfaces';
import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-authentication-netcore';

  LoginDTO = new Login();
  RegisterDTO = new Register();
  JwtAuthDTO = new JwtAuth();

  constructor(private AuthServices: AuthenticationService){}

  Register(RegisterDTO:Register){
    this.AuthServices.register(RegisterDTO).subscribe()
  }

  Login(LoginDTO:Login){
    debugger;
    this.AuthServices.login(LoginDTO).subscribe((JwtAuthDTO) => {
      localStorage.setItem('jwtToken',JwtAuthDTO.token);
    })
  }

  Weather(){
    this.AuthServices.getWeather().subscribe((message:string) => console.log(message));
  }


}
