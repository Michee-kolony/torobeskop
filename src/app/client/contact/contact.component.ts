import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isLoading = false;
  showSuccess = false;
  showError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      contactType: ['', Validators.required],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]]
    });
  }

  // Vérifie si un champ est invalide et a été touché
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? (field.invalid && (field.dirty || field.touched)) : false;
  }

  // Vérifie si un champ est valide et a été touché
  isFieldValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? (field.valid && (field.dirty || field.touched)) : false;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isLoading = true;
      this.showSuccess = false;
      this.showError = false;

      // Simulation d'un appel API
      setTimeout(() => {
        // 90% de chance de succès pour la simulation
        const isSuccess = Math.random() < 0.9;
        
        this.isLoading = false;
        
        if (isSuccess) {
          this.showSuccess = true;
          this.contactForm.reset();
          
          // Cache le message de succès après 5 secondes
          setTimeout(() => {
            this.showSuccess = false;
          }, 5000);
        } else {
          this.showError = true;
          
          // Cache le message d'erreur après 5 secondes
          setTimeout(() => {
            this.showError = false;
          }, 5000);
        }
        
        console.log('Formulaire soumis:', this.contactForm.value);
      }, 2000); // Simule un délai de 2 secondes
    } else {
      // Marque tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}