import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  valid: Boolean = true;
  hidden: Boolean = true;
  formIsValid: Boolean = false;

  civility: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  login: string = "";
  address: string = "";
  zipCode: number | null = null;
  city: string = "";
  contry: string = "";
  phone: number | null = null;
  password: string = "";
  passwordValidation: string = "";

  onSubmit() {
    if (this.civility == "" || this.firstName == "" || this.lastName == "" || this.email == "" || this.login == "" || this.password == "" || this.passwordValidation == "") {
      alert("Tous les champs obligatoires (*) ne sont pas renseignés");
    }
    else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(this.email)) {
        alert("Email invalide.");
      }
      else
      {
        if (this.password != this.passwordValidation) {
          alert("Les mots de passe ne sont pas égaux");
        }
        else
        {
          if (this.password.length < 8)
          {
            alert("Le mot de passe doit contenir au moins 8 caractères");
          }
          else
          {
            this.valid = !this.valid
            this.hidden = !this.hidden
          }
        }
      }
    }
  }
}
