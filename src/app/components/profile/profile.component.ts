import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';




@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
favouriteMovie: string = 'Interstellar';

changeOutcome(ngModelChange: string){
  console.log(ngModelChange + " intercettato")
}
profileForm: FormGroup = new FormGroup({
  nome: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
  cognome: new FormControl<string>('', [Validators.required, Validators.maxLength(50)]),
  dataNascita: new FormControl<Date | string>('')
})
}
