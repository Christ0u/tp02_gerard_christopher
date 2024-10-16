import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  valid : Boolean = true;
  tableIsVisible = false;

  civility : String = "";
  firstName : String = "";
  lastName : String = "";
  email : String = "";
  password : String = "";

  onSubmit()
  {
    this.valid = !this.valid;
    if (this.civility == "" || this.firstName == "" || this.lastName == "" || this.email == "" || this.password == "")
    {
      alert("Tous les champs obligatoires (*) ne sont pas renseignés");
      this.valid = !this.valid;
    } 
  }
}
