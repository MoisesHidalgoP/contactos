import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    address: this.fb.group({
      email: ['']
      
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  OnSubmit() {
    console.warn(this.profileForm.value);
    }
    updateProfile() {
      this.profileForm.patchValue({
        firstName: 'Nancy',
        address: {
          email: 'Nanci123@gmail.com'
        }
      });
    }

    get aliases() {
      return this.profileForm.get('aliases') as FormArray;
    }

    addAlias() {
      this.aliases.push(this.fb.control(''));
    }


}
