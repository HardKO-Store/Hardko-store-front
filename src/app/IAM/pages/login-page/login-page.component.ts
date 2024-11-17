import {Component, inject} from '@angular/core';
import {Login} from '../../model/login.entity';
import {IamApiService} from '../../services/iam-api.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../../model/user.entity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  protected login: Login;
  private _snackBar = inject(MatSnackBar);


  constructor(private iamApiService: IamApiService,
              private router: Router) {
    this.login = new Login(null,null);
  }


  ngOnInit() {
    localStorage.clear()
  }

  userLogin(){
    console.log(this.login);
    this.iamApiService.userLogin(this.login).subscribe(
      data => {
        this._snackBar.open('Login Successful', 'Close');

        localStorage.setItem('user', JSON.stringify(data));
        localStorage.setItem('cart', JSON.stringify([]));

        //wait for 2 seconds
        setTimeout(() => {
          window.location.href = '/home';
        }, 500);

        console.log(data);
      },
      error => {
        this._snackBar.open('Login Failed', 'Close');
        console.log(error);
      }
    );
  }

  toRegister(){
    this.router.navigate(['/register']);
  }
}
