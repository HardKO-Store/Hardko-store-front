import {Component, inject} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateUser} from '../../model/create-user.entity';
import {IamApiService} from '../../services/iam-api.service';
import {Router} from '@angular/router';
import {UserApiService} from '../../services/user-api.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-account',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-account.component.html',
  styleUrl: './register-account.component.scss'
})
export class RegisterAccountComponent {
  userToCreate : CreateUser;
  private _snackBar = inject(MatSnackBar);


  constructor(private userApiService: UserApiService,
              private router: Router) {
    this.userToCreate = new CreateUser(null,null,null,null,null,null,null,null);
  }

  registerUser() {

    //verify if the parameters are null

    if(this.userToCreate.firstName == null || this.userToCreate.lastName == null || this.userToCreate.email == null || this.userToCreate.password == null || this.userToCreate.country == null || this.userToCreate.city == null || this.userToCreate.street == null || this.userToCreate.zip == null){
      this._snackBar.open('Please fill in all the fields', 'Close' ,{ duration: 2000 });

      return;
    }

    this.userApiService.createUser(this.userToCreate).subscribe(
      data => {
        this._snackBar.open('Account Created Successfully', 'Close', { duration: 2000 });
        this.router.navigate(['/login']);
      },
      error => {
        this._snackBar.open('Account Creation Failed', 'Close', { duration: 2000 });
        console.log(error);
      }
    );




  }

  toLogin() {
    this.router.navigate(['/login']);
  }
}
