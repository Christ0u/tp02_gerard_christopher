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
  disableSubmitButton: Boolean = true;
  hideTable: Boolean = true;
  hideForm: Boolean = false;
  hidePasswordMismatchMessage: Boolean = true;
  hidePasswordMatchMessage: Boolean = true;
  hidePasswordLengthAlertMessage: Boolean = true;
  hideInvalidEmailMessage: Boolean = true;
  hideInvalidPhoneMessage: Boolean = true;

  emailIsValid: Boolean = false;
  passwordIsValid: Boolean = false;
  phoneIsValid: Boolean = true;

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
      if (this.emailIsValid && this.passwordIsValid && this.phoneIsValid) {
        this.disableSubmitButton = !this.disableSubmitButton;
        this.hideTable = !this.hideTable;
        this.hideForm = !this.hideForm;
      }
      else {
        alert("Certains champs sont invalides");
      }
    }
  }

  onPasswordInput() {
    if (this.password == "" && this.passwordValidation == "") {
      this.hidePasswordMismatchMessage = true;
      this.hidePasswordMatchMessage = true;
      this.passwordIsValid = false;
    }
    else {
      if (this.passwordValidation != this.password) {
        this.hidePasswordMismatchMessage = false;
        this.hidePasswordMatchMessage = true;
        this.passwordIsValid = false;
      }
      else {
        if (this.password.length < 8) {
          this.hidePasswordMismatchMessage = true;
          this.hidePasswordMatchMessage = false;
          this.hidePasswordLengthAlertMessage = false;
          this.passwordIsValid = false;
        }
        else {
          this.hidePasswordMismatchMessage = true;
          this.hidePasswordMatchMessage = false;
          this.hidePasswordLengthAlertMessage = true;
          this.passwordIsValid = true;
        }
      }
    }
  }

  onEmailInput() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (this.email == "") {
      this.hideInvalidEmailMessage = true;
      this.emailIsValid = false;
    }
    else {
      if (!emailRegex.test(this.email)) {
        this.hideInvalidEmailMessage = false;
        this.emailIsValid = false;
      }
      else {
        this.hideInvalidEmailMessage = true;
        this.emailIsValid = true;
      }
    }
  }

  onPhoneInput() {
    const phoneRegex = /^(\+\d{1,3}|0)[1-9](\s?\d{2}){4}$/;

    if (this.phone?.toString().length == 0) {
      this.hideInvalidPhoneMessage = true;
      this.phoneIsValid = true;
    }
    else {
      if (this.phone != null && phoneRegex.test(this.phone.toString())) {
        this.hideInvalidPhoneMessage = true;
        this.phoneIsValid = true;
      }
      else {
        this.hideInvalidPhoneMessage = false;
        this.phoneIsValid = false;
      }
    }
  }
}
