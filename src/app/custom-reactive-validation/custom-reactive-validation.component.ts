import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl, ValidatorFn} from "@angular/forms";
import {minMaxValidator, forbiddenNameValidator} from "../shared/forbidden-name.directive"

@Component({
  selector: 'app-custom-reactive-validation',
  templateUrl: './custom-reactive-validation.component.html',
  styleUrls: ['./custom-reactive-validation.component.css']
})
export class CustomReactiveValidationComponent implements OnInit {

	policyTermForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.policyTermForm = new FormGroup({
      termName: new FormControl('', [
        Validators.required,
      ]),
      minDuration: new FormControl('', [
        Validators.required,
        Validators.maxLength(4),
        Validators.min(1),
        // customValidation(),
        forbiddenNameValidator(/bob/i)
      ]),
      maxDuration: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100)
      ]),
    }, minMaxValidator())
  }

  submit(value){
    console.log(value);
  }

  get termName() { return  this.policyTermForm.get('termName');}
  get minDuration() { return this.policyTermForm.get('minDuration'); }
  get maxDuration() { return this.policyTermForm.get('maxDuration'); }

}
