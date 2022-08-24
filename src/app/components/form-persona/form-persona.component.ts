import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.sass']
})
export class FormPersonaComponent {


  personaForm: FormGroup = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    edad: [
      '',
      [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.pattern('[0-9]*')],
    ],
    carrera: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    hobbie: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    ],
  });

  constructor(private fb: FormBuilder) { }

  submit(){
    if(!this.personaForm.valid){
      this.personaForm.markAllAsTouched()
      console.log('El formulario es invalido, intente ingresar correctamente los datos');
      return
    }
    const {nombre, edad, carrera, hobbie} = this.personaForm.value;
    console.log(` El nombre ingresado es: ${nombre} \n La edad ingresada es: ${edad} \n La carrera ingresada es: ${carrera} \n El hobbie ingresado es: ${hobbie}`);
  }

  validarCampos(field: string) {
    return (
      this.personaForm.controls[field].errors &&
      this.personaForm.controls[field].touched
    );
  }

  getMensajeError(field: string) {
    return this.personaForm.get(field)?.hasError('required')
      ? `El campo '${field}' es requerido`
      : this.personaForm.get(field)?.hasError('minlength')
      ? `El campo '${field}' tiene que tener al menos 2-3 caracteres`
      : this.personaForm.get(field)?.hasError('maxlength')
      ? `El campo '${field}' supera el limite de caracteres`
      : this.personaForm.get(field)?.hasError('pattern')
      ? 'El valor ingresado debe ser numerico'
      : '';
  }

}
