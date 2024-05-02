import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarteVisite } from '../models/carte';

@Component({
  selector: 'app-carte-visite',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './carte-visite.component.html',
  styleUrl: './carte-visite.component.css'
})
export class CarteVisiteComponent  {
  myForm: FormGroup  ;
  Nom : String = "";
  Prenom : String ="" ; 
  carte : CarteVisite = new CarteVisite ()
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
      
    });

   }


  onSubmit(): void {
      this.carte.nom =    this.myForm.value.firstName ;
      this.carte.prenom= this.myForm.value.lastName ; 
    }
    
}
