import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { PoPageAction } from '@portinari/portinari-ui';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  validations = {
    name: {
      minLength: 3
    }
  };

  patterns = {
    name: `O nome deve possuir no minimo ${this.validations.name.minLength} caracteres`
  };

  form: FormGroup;

  newActions: Array<PoPageAction>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setUpComponents();
    this.createFormControl();
  }

  private setUpComponents() {
    this.newActions = [
        {
          label: 'Salvar',
          disabled: () => this.form.invalid
        },
    ];
  }

  private createFormControl() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
                 Validators.required,
                 Validators.minLength(3)
      ])],
      profession: ['', Validators.required]
    });

  }

}
